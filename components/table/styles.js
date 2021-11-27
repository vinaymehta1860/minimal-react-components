import styled from 'styled-components';
import { LIGHTGRAY } from '../colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: fit-content;
  margin: 5px;
  padding: 2px;
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: ${({ width }) => width ? `${width}` : '150px'};
  height: fit-content;
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 1125px;
  height: fit-content;
  overflow-x: scroll;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 50px;
  border-bottom: 1px solid ${LIGHTGRAY};
  padding: 0;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: ${({ justifyContent }) => justifyContent ? `${justifyContent}` : 'center'};
  align-items: ${({ alignItems }) => alignItems ? `${alignItems}` : 'left'};
  width: ${({ width }) => width ? `${width}` : '150px'};
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor ? `${backgroundColor}` : 'transparent'};
  font-weight: ${({ isHeader }) => isHeader ? 'bold' : 'none'};
`;
