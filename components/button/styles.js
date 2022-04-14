import styled from 'styled-components';

import { BLUE, WHITE } from '../colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  min-width: 100px;
  width: ${({ width }) => width ? `${width}` : 'fit-content'};
  max-width: 300px;
  height: ${({ height }) => height ? `${height}` : '40px'};
  margin: ${({ margin }) => margin ? `${margin}` : '10px'};
  padding: ${({ padding }) => padding ? `${padding}` : '5px'};
  color: ${({ color }) => color ? `${color}` : WHITE};
  background-color: ${({ backgroundColor }) => backgroundColor ? `${backgroundColor}` : BLUE};
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}` : '4px'};
  cursor: pointer;
`;