import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Text, WHITE } from '../';
import Menu from './menu';
import { Container } from './styles';

/**
 * React component
 * @param {Array} options
 * @param {Number} selectedItemIndex
 * @param {Boolean} showIconForSelectedItem
 * @param {Function} onSelect
 * @returns 
 */
const Dropdown = (props) => {
  const {
    options,
    selectedItemIndex,
    showIconForSelectedItem,
    styles,
    onSelect
  } = props;

  const ref = useRef();
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (newMenuItemSelected) => {
    setIsDropdownOpen(false);
    onSelect(newMenuItemSelected);
  };

  const renderIcon = () => {
    return (
      <React.Fragment>
        {
          isDropdownOpen ?
            <ion-icon
                name="chevron-up-outline"
                style={{ fontSize: '24px', color: WHITE }}
            /> :
            <ion-icon
                name="chevron-down-outline"
                style={{ fontSize: '24px', color: WHITE }}
            />
        }
      </React.Fragment>
    )
  }

  const renderOptions = () => {
    if (!isDropdownOpen) {
      return undefined;
    }

    return (
      <Menu
        menuItems={options}
        selectedItemIndex={selectedItemIndex}
        onSelect={handleMenuItemClick}
        parentRef={ref}
        showIconForSelectedItem={showIconForSelectedItem}
        styles={styles}
      />
    )
  }

  return (
    <Container ref={ref} onClick={handleDropdownClick} {...styles}>
      <Text styles={{ color: WHITE }}>
        {selectedItemIndex > -1 ? options[selectedItemIndex].label : ''}
      </Text>
      {renderIcon()}
      {renderOptions()}
    </Container>
  )
}

Dropdown.defaultProps = {
  options: [],
  selectedItemIndex: 0,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
}

Dropdown.propTypes = {
  options: PropTypes.instanceOf(Array),
  selectedItemIndex: PropTypes.number,
  showIconForSelectedItem: PropTypes.bool,
  styles: PropTypes.instanceOf(Object),
  onSelect: PropTypes.func
}

export default Dropdown;
