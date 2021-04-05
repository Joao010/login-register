import { TextField as TextFieldStyled } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { tertiary } from '../../styles/theme.json';

export const TextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: tertiary,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        transition: 'all 0.2s',
        borderColor: tertiary,
      },
      '&:hover fieldset': {
        opacity: .9,
      },
      '&.Mui-focused fieldset': {
        borderColor: tertiary,
      },
    },
  },
})(TextFieldStyled);
