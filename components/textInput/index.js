import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const TextInput = (props) => {
  const {
    value: _value,
    placeHolder,
    autoFocus,
    styles,
    onChange
  } = props;

  const [ value, setValue ] = useState(_value);

  const handleInputChange = (element) => {
    const { target: { value } } = element;

    setValue(value);
    onChange(value);
  };
  
  return (
    <Container
      style={styles}
      type='text'
      value={value}
      autoFocus={autoFocus}
      placeholder={placeHolder}
      onChange={handleInputChange}
    />
  )
};

TextInput.defaultProps = {
  value: '',
  placeHolder: '',
  autoFocus: false,
  styles: {},
  onChange: () => {}
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  autoFocus: PropTypes.bool,
  styles: PropTypes.instanceOf(Object),
  onChange: PropTypes.func
};

export default TextInput;
