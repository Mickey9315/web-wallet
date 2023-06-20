import { styled } from '@mui/material/styles';

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
  minHeight: '100vh',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
  margin: 'auto',
  overflowY: 'auto',
  backgroundColor: '#FAFAFA',
  [theme.breakpoints.up('md')]: {
    width: 375,
    height: 760,
    borderRadius: 20,
    minHeight: 'unset',
  },
}));
