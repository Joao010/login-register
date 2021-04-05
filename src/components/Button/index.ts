import { Button as MainButton, withStyles } from '@material-ui/core';
import { quaternary, tertiary } from '../../styles/theme.json';

export const Button = withStyles({
  root: {
    background: tertiary,
    color: 'white',
    width: '80%',
    height: 52,
    '&:hover': {
      background: quaternary,
    },
  },
})(MainButton);
