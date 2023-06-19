// mui
import { Box } from '@mui/material';
// next
import Head from 'next/head';
// components
import CustomContainer from 'src/components/custom-container/CustomContainer';
import DashboardLayout from '../../layouts/dashboard';

import { PATH_WALLET } from 'src/routes/paths';

import SubHeader from './components/SubHeader';

// ----------------------------------------------------------------------

ToFriend.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ToFriend() {
  return (
    <>
      <Head>
        <title> Newwit - Wallet - To Friend</title>
      </Head>

      <CustomContainer>
        <Box>
          <SubHeader title="To Friend" back={PATH_WALLET.dashboard} />
        </Box>
      </CustomContainer>
    </>
  );
}
