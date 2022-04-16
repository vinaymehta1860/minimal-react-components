import React from 'react';
import PropTypes from 'prop-types';

import { Label } from './styles';

const Text = (props) => {
  const { children, styles, onClick } = props;

  return (
    <Label style={styles} onClick={onClick}>
      {children}
    </Label>
  )
}

Text.defaultProps = {
  styles: {},
  onClick: () => {}
}

Text.propTypes = {
  styles: PropTypes.instanceOf(Object),
  onClick: PropTypes.func
}

export default Text;
