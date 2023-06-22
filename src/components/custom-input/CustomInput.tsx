import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';
import { FONT } from 'src/config-global';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '40px',
    padding: '0 12px',
    border: '1px solid #828282',
    borderRadius: '10px',
    '& > input': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    ...FONT.md,
  },
  '& .MuiOutlinedInput-notchedOutline': { border: '0 !important' },
  '& .MuiFormHelperText-root': {
    ...FONT.xs,
    fontStyle: 'italic',
    margin: '8px 0 0 0',
    color: 'black',
  },
  '&:placeholder': { color: '#828282' },
});

const CustomInput = (props: TextFieldProps) => <StyledTextField {...props} />;

export default CustomInput;
