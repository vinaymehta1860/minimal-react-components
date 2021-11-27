import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = (props) => {
  const { text, children, styles, onSubmit } = props;

  return (
    <Container
      onClick={onSubmit}
      {...styles}
    >
      {text !== '' ? text : undefined}
      {text === '' ? children : undefined}
    </Container>
  )
}

Button.defaultProps = {
  text: '',
  styles: {},
  onSubmit: () => {}
}

Button.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  onSubmit: PropTypes.func
}

export default Button;
