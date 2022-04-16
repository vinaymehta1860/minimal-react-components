import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = (props) => {
  const { children, styles, onSubmit } = props;

  return (
    <Container
      onClick={onSubmit}
      style={styles}
    >
      {children}
    </Container>
  )
}

Button.defaultProps = {
  styles: {},
  onSubmit: () => {}
}

Button.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.instanceOf(Object),
  onSubmit: PropTypes.func
}

export default Button;
