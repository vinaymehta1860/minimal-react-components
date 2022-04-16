import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuItem from './menu-item';
import { BLACK, WHITE } from '../colors';

const Menu = (props) => {
  const { menuItems, selectedItemIndex, parentRef, showIconForSelectedItem, styles, onSelect } = props;

  const renderMenuItems = () => {
    return menuItems.map((menuItem, index) => {
      return (
        <MenuItem
          key={index}
          itemIndex={index}
          label={menuItem.label}
          isSelected={selectedItemIndex === index}
          showIconForSelectedItem={showIconForSelectedItem}
          onSelect={onSelect}
          styles={styles}
        />
      )
    });
  };

  return (
    <Container
      width={styles.width}
      top={parentRef.current.getBoundingClientRect().top + 41}
      left={parentRef.current.getBoundingClientRect().left}
    >
      {renderMenuItems()}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width }) => width ? `${width} + 20px` : '170px'};
  height: fit-content;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  color: ${WHITE};
  box-shadow: 10px 10px 15px -5px #999;
  background-color: ${BLACK};
  z-index: 100;
`;

Menu.defaultProps = {
  menuItems: [],
  selectedItemIndex: -1,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
}

Menu.propTypes = {
  parentRef: PropTypes.any,
  menuItems: PropTypes.instanceOf(Array),
  selectedItemIndex: PropTypes.number,
  showIconForSelectedItem: PropTypes.bool,
  styles: PropTypes.instanceOf(Object),
  onSelect: PropTypes.func
}

export default Menu;
