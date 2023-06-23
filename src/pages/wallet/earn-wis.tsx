// mui
import { Stack } from '@mui/material';
// next
import Head from 'next/head';
import { useRouter } from 'next/router';
// components
import { PATH_WALLET } from 'src/routes/paths';

import CustomContainer from 'src/components/custom-container/CustomContainer';
import CustomButton from 'src/components/custom-button/CustomButton';
import Image from 'src/components/image/Image';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import SubHeader from '../../sections/wallet/SubHeader';

import DashboardLayout from '../../layouts/dashboard';

// ----------------------------------------------------------------------

EarnWIS.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function EarnWIS() {
  const router = useRouter();

  const handleClick = () => {
    router.replace(PATH_WALLET.dashboard);
  };

  return (
    <>
      <Head>
        <title> Newwit - Wallet - Withdraw</title>
      </Head>

      <CustomContainer bgcolor="white">
        <SubHeader title="How to earn WIS?" />
        <Stack alignItems="center" justifyContent="space-between" height={1}>
          <Stack>
            <Stack justifyContent="center" alignItems="center" mt={3} mb={6}>
              <Image src="/assets/icons/wallets/ic_wis_50.svg" sx={{ width: 72, height: 72 }} />
            </Stack>
            <Stack px={2.5} spacing={3} textAlign="center">
              <Stack spacing={0.75}>
                <CustomTypography size="lg">1. Weekly Ranking</CustomTypography>
                <CustomTypography size="sm">
                  You get weekly rewards for ranking top 50% in any topic WIT leaderboard.
                </CustomTypography>
              </Stack>
              <Stack spacing={0.75}>
                <CustomTypography size="lg">2. Monthly Ranking</CustomTypography>
                <CustomTypography size="sm">
                  You get rewards according to your ranking in topic WIT leaderboard.
                </CustomTypography>
              </Stack>
            </Stack>
          </Stack>
          <CustomButton onClick={handleClick}>Start Playing!</CustomButton>
        </Stack>
      </CustomContainer>
    </>
  );
}
