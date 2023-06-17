import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const StyledButton = styled(Button)({
  width: '100%',
  height: 50,
  borderRadius: '8px',
  background: '#4200FF',
  color: 'white',
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '27px',
  '&:hover': {
    background: '#8866FF',
  },
  '&:disabled': {
    background: '#A180FF',
  },
  '&:disabled > span': {
    color: 'white',
    opacity: 0.5,
  },
});

const CustomButton = ({ children, ...other }: any) => {
  return (
    <StyledButton {...other}>
      <Box component="span">{children}</Box>
    </StyledButton>
  );
};

export default CustomButton;
