import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = (props) => {
  const { children, styles, onClick } = props;
  /**
   * Untill v2.2.0, onSubmit was the only prop accepted which was later
   * renamed to onClick. That is why the following piece of code exists
   * so as to avoid major version upgrade.
   */
  if (props.onSubmit) {
    props.onSubmit = onClick;
  }

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
