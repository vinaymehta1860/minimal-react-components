import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = (props) => {
  const { children, styles, onClick } = props;

  return (
    <Container
      onClick={onClick}
      style={styles}
    >
      {children}
    </Container>
  )
}

Button.defaultProps = {
  styles: {},
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.instanceOf(Object),
  onClick: PropTypes.func
}

export default Button;
