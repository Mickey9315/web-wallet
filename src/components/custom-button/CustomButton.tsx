import { styled } from '@mui/material/styles';
import { Box, Button, ButtonProps } from '@mui/material';
import { FONT } from 'src/config-global';

const StyledButtonDefault = styled(Button)({
  width: '100%',
  height: 50,
  borderRadius: '8px',
  background: '#4200FF',
  color: 'white',
  ...FONT.xl,
  '&:hover': {
    background: '#8866FF',
  },
  '&:disabled': {
    background: '#A180FF',
  },
  '&:disabled > span': {
    color: 'white',
    opacity: 0.8,
  },
});

const StyledButtonGradient = styled(Button)({
  width: '100%',
  height: 50,
  borderRadius: '8px',
  background: 'linear-gradient(268.45deg, #07EED6 4.85%, #4423FF 99.7%)',
  color: 'white',
  ...FONT.xl,
  '&:hover': {
    opacity: 0.8,
  },
  '&:disabled': {
    color: 'white',
    opacity: 0.5,
  },
});

const StyledButtonText = styled(Button)({
  background: 'transparent',
  color: '#4200FF',
  padding: 0,
  minWidth: 'unset',
  ...FONT.md,
  '&:hover': {
    color: '#9900FF',
    backgroundColor: 'transparent',
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
});

type Props = {
  children: React.ReactNode;
  bstyle?: 'default' | 'gradient' | 'text';
} & ButtonProps;

const CustomButton = ({ bstyle = 'default', children, ...other }: Props) => (
  <>
    {bstyle === 'default' && (
      <StyledButtonDefault {...other}>
        <Box component="span">{children}</Box>
      </StyledButtonDefault>
    )}
    {bstyle === 'gradient' && (
      <StyledButtonGradient {...other}>
        <Box component="span">{children}</Box>
      </StyledButtonGradient>
    )}
    {bstyle === 'text' && (
      <StyledButtonText {...other}>
        <Box component="span">{children}</Box>
      </StyledButtonText>
    )}
  </>
);

export default CustomButton;
