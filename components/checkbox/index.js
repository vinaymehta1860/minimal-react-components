import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Checkbox = (props) => {
  const { isChecked, label, onClick } = props;

  const [ checkboxValue, setCheckBoxValue ] = useState(isChecked);

  useEffect(() => {
    onClick && onClick(checkboxValue);
  }, [checkboxValue]);

  const onSelect = (event) => {
    setCheckBoxValue(event.target.checked);
  };

  return (
    <Container>
      <input
        type="checkbox"
        checked={checkboxValue}
        onChange={onSelect}
        id="check"
        name="check"
      />
      <label style={{ marginLeft: '10px' }} htmlFor="check">{label}</label>
    </Container>
  )
}

Checkbox.defaultProps = {
  isChecked: false,
  label: '',
  onClick: () => {}
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Checkbox;
