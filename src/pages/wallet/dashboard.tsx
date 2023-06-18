import { useState } from 'react';
// next
import Head from 'next/head';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import CustomContainer from 'src/components/custom-container/CustomContainer';
import { Box, Button, Stack } from '@mui/material';
import Image from 'src/components/image/Image';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import { CustomAvatar } from 'src/components/custom-avatar';
import Iconify from 'src/components/iconify/Iconify';
import { FONT, ICON } from 'src/config-global';
import CarouselBox from './components/CarouselBox';
import HistoryBox from './components/HistoryBox';
import WalletHeader from './components/WalletHeader';

// ----------------------------------------------------------------------

Dashboard.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Dashboard() {
  const [wallet, setWallet] = useState('WISDOM');

  return (
    <>
      <Head>
        <title> Newwit - Wallet - WISDOM</title>
      </Head>

      <CustomContainer>
        <Box>
          <WalletHeader />
        </Box>
        <Box mt={2.5}>
          <CarouselBox />
        </Box>
        <Box mt={2.5}>
          <HistoryBox />
        </Box>
      </CustomContainer>
    </>
  );
}
