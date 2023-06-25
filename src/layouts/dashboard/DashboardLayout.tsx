// @mui
import { Box } from '@mui/material';
// components
import useResponsive from 'src/hooks/useResponsive';
import ConnectButton from 'src/components/connect-button/ConnectButton';
// auth
import AuthGuard from '../../auth/AuthGuard';
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const isDesktop = useResponsive('up', 'md');
  const renderContent = () => (
    <>
      <Box
        sx={{
          display: { lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { lg: 1 },
        }}
      >
        <Main>{children}</Main>
        {isDesktop && <ConnectButton sx={{ position: 'absolute', top: 10, right: 20 }} />}
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
