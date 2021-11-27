import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Icon = (props) => {
  const { icon, styles } = props;

  return (
    <Container {...styles}>
      {icon}
    </Container>
  )
}

Icon.defaultProps = {
  styles: {}
}

Icon.propTypes = {
  styles: PropTypes.instanceOf(Object)
}

export default Icon;
