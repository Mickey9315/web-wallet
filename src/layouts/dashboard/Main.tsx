// @mui
import { Box, BoxProps, Stack } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import { useSettingsContext } from '../../components/settings';
import { StyledContent, StyledRoot } from './styles';
import Scrollbar from 'src/components/scrollbar/Scrollbar';

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }: BoxProps) {
  const isDesktop = useResponsive('up', 'lg');

  if (isDesktop) {
    return (
      <StyledRoot>
        <StyledContent>
          <Scrollbar>
            <Stack sx={{ width: 1, height: 760 }}> {children} </Stack>
          </Scrollbar>
        </StyledContent>
      </StyledRoot>
    );
  }

  return (
    <StyledRoot>
      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledContent>
    </StyledRoot>
  );
}
