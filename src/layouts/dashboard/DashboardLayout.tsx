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
  const renderContent = () => <Main>{children}</Main>;

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
