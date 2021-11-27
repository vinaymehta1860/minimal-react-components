import styled from 'styled-components';
import { LIGHTBLACK, WHITISH } from '../colors';

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
width: ${({ width }) => width ? `${width}` : '150px'};
height: 20px;
margin: 5px;
padding: 10px;
background-color: ${LIGHTBLACK};
cursor: pointer;
`;
