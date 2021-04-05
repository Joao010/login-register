import { useState } from 'react';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { DivColumn } from './style';

export const Login = () => {
  const [ clicked, setClicked ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <DivColumn>
      <TextField
      value={email}
      onChange={(ev) => setEmail(ev.target.value)}
      label='Email'
      type='email'
      variant='outlined'
      style={{width: '80%'}}
      error={clicked && !email}
      />

      <TextField
      value={password}
      onChange={(ev) => setPassword(ev.target.value)}
      label='Password'
      type='password'
      variant='outlined'
      style={{width: '80%'}}
      error={clicked && !password}
      />

      <Button style={{width: '80%'}} onClick={() => setClicked(true)}>Login</Button>
    </DivColumn>
  );
}
