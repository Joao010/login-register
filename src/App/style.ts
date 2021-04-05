import styled from 'styled-components';
import { primary, secondary } from '../styles/theme.json';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.div`
  background: linear-gradient(${primary}, ${secondary});
  padding: 30px 0;
  border-radius: 10px;
  width: 30%;
  max-width: 600px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`
