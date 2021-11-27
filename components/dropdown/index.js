import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import Text from '../Text';
import Menu from './menu';
import { Container } from './styles';

const Dropdown = (props) => {
  const {
    dropdownOptions,
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

  return (
    <Container ref={ref} onClick={handleDropdownClick} {...styles}>
      <Text text={selectedItemIndex > -1 ? dropdownOptions[selectedItemIndex].label : ''} />
      {!isDropdownOpen && <FiChevronDown size={25} />}
      {isDropdownOpen && <FiChevronUp size={25} />}
      {isDropdownOpen && (
        <Menu
          menuItems={dropdownOptions}
          selectedItemIndex={selectedItemIndex}
          onSelect={handleMenuItemClick}
          parentRef={ref}
          showIconForSelectedItem={showIconForSelectedItem}
          styles={styles}
        />
      )}
    </Container>
  )
}

Dropdown.defaultProps = {
  dropdownOptions: [],
  selectedItemIndex: -1,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
}

Dropdown.propTypes = {
  dropdownOptions: PropTypes.instanceOf(Array),
  selectedItemIndex: PropTypes.number,
  showIconForSelectedItem: PropTypes.bool,
  styles: PropTypes.instanceOf(Object),
  onSelect: PropTypes.func
}

export default Dropdown;
