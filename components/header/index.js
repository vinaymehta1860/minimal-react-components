import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Left,
  Center,
  Right
} from './styles';

const Header = (props) => {
  const {
    left,
    center,
    right,
    styles
  } = props;

  return (
    <Container style={styles}>
      <Left>{left}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Container>
  )
}

Header.defaultProps = {
  left: null,
  center: null,
  right: null,
  styles: {}
}

Header.propTypes = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
  styles: PropTypes.instanceOf(Object)
}

export default Header;
