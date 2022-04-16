import React from 'react';
import PropTypes from 'prop-types';

import { Card as Container, Header, Footer } from './styles';

const Card = (props) => {
  const {
    headerContents,
    children,
    footerContents,
    styles,
    headerStyles,
    footerStyles
  } = props;

  return (
    <Container style={styles}>
      <Header style={headerStyles}>
        {headerContents}
      </Header>
      {children}
      <Footer style={footerStyles}>
        {footerContents}
      </Footer>
    </Container>
  )
};

Card.defaultProps = {
  children: null,
  headerContents: null,
  footerContents: null,
  styles: {},
  headerStyles: {},
  footerStyles: {}
};

Card.propTypes = {
  children: PropTypes.any,
  headerContents: PropTypes.any,
  footerContents: PropTypes.any,
  styles: PropTypes.instanceOf(Object),
  headerStyles: PropTypes.instanceOf(Object),
  footerStyles: PropTypes.instanceOf(Object),
};

export default Card;
