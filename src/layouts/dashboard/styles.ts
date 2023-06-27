import { styled } from '@mui/material/styles';
import { MAIN } from 'src/config-global';

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
  minHeight: '100dvh',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
  overflowY: 'auto',
  backgroundColor: '#FAFAFA',
  [theme.breakpoints.up('md')]: {
    width: MAIN.W_DESKTOP,
    height: MAIN.H_DESKTOP,
    borderRadius: 20,
    minHeight: 'unset',
  },
}));
