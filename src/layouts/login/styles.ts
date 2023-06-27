// @mui
import { styled, alpha } from '@mui/material/styles';
// utils
import { MAIN } from 'src/config-global';
import { bgGradient } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
  minHeight: '100dvh',
}));

export const StyledSection = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const StyledSectionBg = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  top: 0,
  left: 0,
  zIndex: -1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transform: 'scaleX(-1)',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'auto',
  backgroundColor: theme.palette.common.white,
  padding: '24px 20px',
  [theme.breakpoints.up('md')]: {
    width: MAIN.W_DESKTOP,
    height: MAIN.H_DESKTOP,
    borderRadius: 20,
    padding: '90px 20px',
  },
}));
