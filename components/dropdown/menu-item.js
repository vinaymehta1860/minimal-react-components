import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

import Text from '../Text';
import { BLUE } from '../colors';

const MenuItem = (props) => {
  const { label, itemIndex, isSelected, showIconForSelectedItem, styles, onSelect } = props;

  const handleMenuItemClick = () => {
    onSelect && onSelect(itemIndex);
  };

  return (
    <Container width={styles.width} onClick={handleMenuItemClick}>
      <Text text={label} />
      {showIconForSelectedItem && isSelected && <FiCheck size={25} style={{ color: BLUE }} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width ? `${width}` : '150px'};
  height: 30px;
  margin: 0;
  padding: 5px 10px;

  :hover {
    outline: 2px solid BLUE;
  }
`;

MenuItem.defaultProps = {
  label: '',
  itemIndex: null,
  isSelected: false,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
}

MenuItem.propTypes = {
  label: PropTypes.any,
  itemIndex: PropTypes.number,
  isSelected: PropTypes.bool,
  showIconForSelectedItem: PropTypes.bool,
  styles: PropTypes.instanceOf(Object),
  onSelect: PropTypes.func
}

export default MenuItem;
