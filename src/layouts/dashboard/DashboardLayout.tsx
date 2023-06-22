// @mui
import { Box } from '@mui/material';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
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
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
