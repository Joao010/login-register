import styled from 'styled-components';

export const Container = styled.div`
  width: 80% !important;
  box-shadow: 1px 1px 5px gray;
  border-radius: 15px;
  margin: 20px 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.div`
  height: 50px;
  transition: all 0.2s;
  cursor: pointer;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: .9;
  }
`;
