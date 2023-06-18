import { useState } from 'react';
// mui
import { Box } from '@mui/material';
// next
import Head from 'next/head';
// components
import CustomContainer from 'src/components/custom-container/CustomContainer';
import DashboardLayout from '../../layouts/dashboard';

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
