// @mui
import { BoxProps, Stack } from '@mui/material';
// components
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import { useSettingsContext } from '../../components/settings';
import { StyledContent, StyledRoot } from './styles';
// hooks
import useResponsive from '../../hooks/useResponsive';

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
