import { Container, SubContainer } from './style';

import { tertiary, quinternary } from '../../styles/theme.json';
import { OptionInterface } from '../../interfaces';

export const Options = ({ option, setOption }: OptionInterface) => {
  return (
    <Container>
      <SubContainer
      style={{
      background: option === 'Login' ? tertiary : quinternary,
      borderRadius: '15px 0 0 15px'}}
      onClick={() => setOption('Login')}>
        Login
      </SubContainer>

      <SubContainer
      style={{
      background: option === 'Register' ? tertiary : quinternary,
      borderRadius: '0 15px 15px 0'}}
      onClick={() => setOption('Register')}>
        Register
      </SubContainer>
    </Container>
  );
}
