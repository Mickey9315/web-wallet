import { styled } from '@mui/material/styles';

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  margin: 'auto',
  display: 'flex',
  overflowY: 'auto',
  backgroundColor: '#FAFAFA',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    width: 375,
    height: 740,
    borderRadius: 20,
    minHeight: 'unset',
  },
}));
