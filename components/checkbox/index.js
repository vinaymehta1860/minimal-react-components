import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input } from './styles';

const Checkbox = (props) => {
  const {
    label,
    onClick,
    value
  } = props;

  const onSelect = (event) => {
    onClick(event);
  };

  return (
    <Container>
      <Input
        type="checkbox"
        value={value}
        onChange={onSelect}
        id="check"
        name="check"
      />
      <label style={{ marginLeft: '10px' }} htmlFor="check">{label}</label>
    </Container>
  )
}

Checkbox.defaultProps = {
  value: {},
  label: '',
  onClick: () => {}
}

Checkbox.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Checkbox;
