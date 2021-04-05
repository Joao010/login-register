import { Form } from './style';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { useState } from 'react';

export const Register = () => {
  const [ clicked, setClicked ] = useState(false);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <Form>
      <TextField
      value={name}
      onChange={(ev) => setName(ev.target.value)}
      label='Name'
      type='text'
      variant='outlined'
      style={{width: '80%'}}
      error={clicked && !name}
      />

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

      <Button style={{width: '80%'}} onClick={() => setClicked(true)}>Register</Button>
    </Form>
  );
}
