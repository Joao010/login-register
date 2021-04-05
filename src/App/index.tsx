import React, { useState } from 'react';
import { Login } from '../components/Login';
import { Options } from '../components/Options';
import { Register } from '../components/Register';
import { Container, SubContainer } from './style';
import './style.ts';

export const App = () => {
  const [ option, setOption ] = useState('Login');
  
  return(
    <Container>
      <SubContainer>
        <Options option={option} setOption={(value: string) => setOption(value)}/>

        {
        option === 'Login'
        ? <Login/>
        : <Register/>
        }
      </SubContainer>
    </Container>
  );
}
