import React from 'react';
import PropTypes from 'prop-types';

import { Label } from './styles';

const Text = (props) => {
  const { children, text, type, styles, onClick } = props;

  if (text && text.length) {
    return (
      <Label style={styles} type={type} onClick={onClick}>
        {text}
      </Label>
    )
  } else {
    return (
      <Label style={styles} type={type} onClick={onClick}>
        {children}
      </Label>
    )
  }
}

Text.defaultProps = {
  text: '',
  type: 'regularText',
  styles: {}
}

Text.propTypes = {
  text: PropTypes.any,
  type: PropTypes.string,
  styles: PropTypes.instanceOf(Object)
}

export default Text;
