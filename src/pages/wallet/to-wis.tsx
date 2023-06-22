import { useState } from 'react';
// mui
import { Box, InputAdornment, Stack } from '@mui/material';
// next
import { useRouter } from 'next/router';
import Head from 'next/head';
// components
import { PATH_WALLET } from 'src/routes/paths';
import { ICON } from 'src/config-global';

import CustomContainer from 'src/components/custom-container/CustomContainer';
import CustomButton from 'src/components/custom-button/CustomButton';
import CustomForm from 'src/components/custom-form/CustomForm';
import Image from 'src/components/image/Image';
import CustomInput from 'src/components/custom-input/CustomInput';
import Iconify from 'src/components/iconify/Iconify';
import CustomLink from 'src/components/custom-link/CustomLink';
import CustomDialog from 'src/components/custom-dialog/CustomDialog';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import SubHeader from '../../sections/wallet/SubHeader';

import DashboardLayout from '../../layouts/dashboard';

// ----------------------------------------------------------------------

ToWIS.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ToWIS() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleMaxAmount = () => {
    const max = '2422';
    setAmount(max);
  };

  const handleConfirm = () => {
    setOpenConfirm(true);
  };

  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  const handleSubmit = () => {
    router.replace(PATH_WALLET.passcode);
  };

  return (
    <>
      <Head>
        <title> Newwit - To WIS</title>
      </Head>

      <CustomContainer bgcolor="white">
        <Box>
          <SubHeader title="To WIS" back={PATH_WALLET.dashboard} />
        </Box>
        <Stack mt={1} justifyContent="space-between" height={1}>
          <Stack spacing={3}>
            <Stack spacing={3} position="relative">
              <CustomForm label="To">
                <CustomInput
                  value="WISDOM"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          src="/assets/icons/wallets/ic_wisdom_20.svg"
                          sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </CustomForm>
              <CustomLink href={PATH_WALLET.depositWISDOM} position="absolute" top={62} right={0}>
                <Iconify
                  icon="lucide:arrow-up-down"
                  width={24}
                  height={24}
                  sx={{ '&:hover': { color: '#4200FF' } }}
                />
              </CustomLink>
              <CustomForm label="From">
                <CustomInput
                  value="WIS"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          src="/assets/icons/wallets/ic_wis_20.svg"
                          sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </CustomForm>
            </Stack>
            <CustomForm label="Amount">
              <CustomInput
                placeholder="Enter the price"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                helperText="Balance: [xx] WISDOM"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image
                        src="/assets/icons/wallets/ic_wisdom_20.svg"
                        sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <CustomButton bstyle="text" onClick={handleMaxAmount}>
                        MAX
                      </CustomButton>
                    </InputAdornment>
                  ),
                }}
              />
            </CustomForm>
          </Stack>
          <CustomButton disabled={amount === ''} onClick={handleConfirm}>
            Confirm
          </CustomButton>
        </Stack>
      </CustomContainer>

      <CustomDialog open={openConfirm} onClose={handleConfirmClose}>
        <Stack alignItems="center" p="50px 20px 24px">
          <CustomTypography size="xl">To WISDOM</CustomTypography>
          <Stack spacing={1.75} width={1} mt={3.25}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <CustomTypography size="md">Amount</CustomTypography>
              <Stack direction="row" spacing={0.75}>
                <Image
                  src="/assets/icons/wallets/ic_wisdom_20.svg"
                  sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                />
                <CustomTypography size="md">XXX</CustomTypography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <CustomTypography size="md">Gas Fee</CustomTypography>
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_matic_20.svg"
                  sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                />
                <CustomTypography size="md">XXXX</CustomTypography>
              </Stack>
            </Stack>
          </Stack>
          <Box mt="75px" width={1}>
            <CustomButton bstyle="gradient" onClick={handleSubmit}>
              Confirm
            </CustomButton>
          </Box>
        </Stack>
      </CustomDialog>
    </>
  );
}
