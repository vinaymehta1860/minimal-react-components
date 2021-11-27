import styled from 'styled-components';

import { BLUE, WHITE } from '../';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width ? `${width}` : '100px'};
  height: ${({ height }) => height ? `${height}` : '40px'};
  margin: ${({ margin }) => margin ? `${margin}` : '10px'};
  padding: ${({ padding }) => padding ? `${padding}` : '5px'};
  color: ${({ color }) => color ? `${color}` : WHITE};
  background-color: ${({ backgroundColor }) => backgroundColor ? `${backgroundColor}` : BLUE};
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}` : '2px'};
  cursor: pointer;
`;