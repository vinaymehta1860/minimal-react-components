import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: fit-content;
  min-width: 400px;
  max-width: 600px;
  height: fit-content;
  min-height: 200px;
  max-height: 500px;
  box-shadow: 0 0 0 1px #dadce0;
  border-radius: 8px;
  margin: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid #dadce0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
  border-top: 1px solid #dadce0;
`;
