import styled from 'styled-components';

import { SLATEGRAY } from '../';

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  height: 50px;
  padding: 2px;
  margin: 5px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 40px;
  margin: 5px 2px;
  padding: 0 22px;
  outline: ${({ active }) => active ? `2px solid ${SLATEGRAY}` : 'none'};
  /* background-color: 'transparent'; */
  color: WHITE;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    outline: 2px solid ${SLATEGRAY};
  }
`;
