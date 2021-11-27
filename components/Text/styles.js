import styled from 'styled-components';

import { WHITE } from './colors';

const Label = styled.p`
  font-size: ${({ type }) => {
    if (type === 'regularText') {
      return '15px';
    } else if (type === 'heading') {
      return '18px';
    } else {
      return '14px';
    }
  }};
  font-weight: ${({ type }) => {
    if (type === 'regularText') {
      return 'none';
    } else if (type === 'heading') {
      return 'bold';
    } else {
      return 'none';
    }
  }};
  color: ${WHITE};
  margin: 3px;
`;