import { useState } from 'react';
// mui
import { Box, InputAdornment, Stack } from '@mui/material';
// next
import { useRouter } from 'next/router';
import Head from 'next/head';
// components
import CustomContainer from 'src/components/custom-container/CustomContainer';
import DashboardLayout from '../../layouts/dashboard';

import { PATH_WALLET } from 'src/routes/paths';
import { ICON } from 'src/config-global';

import SubHeader from '../../sections/wallet/SubHeader';
import CustomButton from 'src/components/custom-button/CustomButton';
import CustomForm from 'src/components/custom-form/CustomForm';
import Image from 'src/components/image/Image';
import CustomInput from 'src/components/custom-input/CustomInput';
import Iconify from 'src/components/iconify/Iconify';
import CustomDialog from 'src/components/custom-dialog/CustomDialog';
import CustomTypography from 'src/components/custom-typography/CustomTypography';

// ----------------------------------------------------------------------

ToExternal.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ToExternal() {
  const router = useRouter();
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [openDepositConfirm, setOpenDepositConfirm] = useState(false);

  const max = '2422';
  const handleMaxAmount = () => {
    setAmount(max);
  };

  const handleConfirm = () => {
    setOpenDepositConfirm(true);
  };

  const handleConfirmClose = () => {
    setOpenDepositConfirm(false);
  };

  const handleDeposit = () => {
    router.replace(PATH_WALLET.passcode);
  };

  return (
    <>
      <Head>
        <title> Newwit - To External </title>
      </Head>

      <CustomContainer bgcolor="transparent">
        <Box>
          <SubHeader title="To External" back={PATH_WALLET.dashboard} />
        </Box>
        <Stack mt={3} justifyContent="space-between" height={1}>
          <Stack spacing={3.75}>
            <Stack alignItems="center">
              <Image
                src="/assets/icons/wallets/ic_wis_50.svg"
                sx={{ width: ICON.SIZE.xl, height: ICON.SIZE.xl }}
              />
            </Stack>
            <Stack direction="row" spacing={2.5} alignItems="center" justifyContent="center">
              <CustomTypography size="lg">Newwit</CustomTypography>
              <Iconify icon="carbon:arrow-right" width={15} height={15} />
              <CustomTypography size="lg">External</CustomTypography>
            </Stack>
            <Stack spacing={3}>
              <CustomForm label="To Address">
                <CustomInput
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Iconify
                          icon="ant-design:scan-outlined"
                          width={16}
                          height={16}
                          sx={{ '&:hover': { cursor: 'pointer' } }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </CustomForm>
              <CustomForm label="Amount">
                <CustomInput
                  placeholder="Enter the price"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  helperText="Balance: [xx] WIS"
                  InputProps={{
                    sx: { color: Number(amount) > Number(max) ? '#FF401A' : 'black' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          src="/assets/icons/wallets/ic_wis_20.svg"
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
              <Box bgcolor="#DEFFFB" px={6} py={1.25} textAlign="center">
                <CustomTypography size="sm">
                  Your WIS will be transferred from Newwit wallet to Matic wallet.
                </CustomTypography>
              </Box>
            </Stack>
            {Number(amount) > Number(max) && (
              <Stack
                mx="-20px !important"
                bgcolor="#FF401A"
                px={2.5}
                py={1.5}
                spacing={1.5}
                direction="row"
                alignItems="center"
              >
                <Iconify
                  icon="ci:warning"
                  width={ICON.SIZE.sm}
                  height={ICON.SIZE.sm}
                  color="white"
                />
                <CustomTypography sx={{ fontSize: '14px', lineHeight: '19px', color: 'white' }}>
                  Not enough
                </CustomTypography>
              </Stack>
            )}
          </Stack>
          <CustomButton
            bstyle="gradient"
            disabled={toAddress === '' || amount === ''}
            onClick={handleConfirm}
            sx={{ mt: 1 }}
          >
            Confirm
          </CustomButton>
        </Stack>
      </CustomContainer>

      <CustomDialog open={openDepositConfirm} onClose={handleConfirmClose}>
        <Stack alignItems="center" p="50px 20px 24px">
          <CustomTypography size="xl">Confirm To Withdraw</CustomTypography>
          <Stack spacing={1.75} width={1} mt={3.25}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <CustomTypography size="md">Withdrawal Amount</CustomTypography>
              <Stack direction="row" spacing={0.75}>
                <Image
                  src="/assets/icons/wallets/ic_wis_20.svg"
                  sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                />
                <CustomTypography size="md">0.60</CustomTypography>
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
            <CustomButton bstyle="gradient" onClick={handleDeposit}>
              Confirm
            </CustomButton>
          </Box>
        </Stack>
      </CustomDialog>
    </>
  );
}
