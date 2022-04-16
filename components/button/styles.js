import styled from 'styled-components';

import { BLUE, WHITE } from '../colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  min-width: 100px;
  width: fit-content;
  max-width: 300px;
  height: 40px;
  margin: 10px;
  padding: 5px;
  color: ${WHITE};
  background-color: ${BLUE};
  border-radius: 4px;
  cursor: pointer;
`;