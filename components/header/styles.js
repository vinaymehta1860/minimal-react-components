import styled from 'styled-components';
import { BLACK } from '../';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 50px;
  padding-bottom: 5px;
  margin: 5px;
  border-bottom: 2.5px solid ${BLACK};
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center
`;

export {
  Container,
  Left,
  Center,
  Right
}
