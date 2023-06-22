import { useState } from 'react';
// mui
import { Box, CircularProgress, InputAdornment, Stack } from '@mui/material';
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
import CustomAutocomplete from 'src/components/custom-autocomplete/CustomAutocomplete';
import OtpInput from 'src/components/otp-input/OtpInput';
import CustomDialog from 'src/components/custom-dialog/CustomDialog';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import CustomSpinner from 'src/components/custom-spinner/CustomSpinner';

// ----------------------------------------------------------------------

Passcode.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

// ----- For test -----
const deplay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const random = (): number => {
  return Math.floor(Math.random() * 2);
};
// ----- For test -----

export default function Passcode() {
  const router = useRouter();
  const [passcode, setPasscode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [dialogParams, setDialogParams] = useState<DialogParamsType>({
    open: false,
    title: '',
    subtitle: '',
    icon: '',
    message: '',
  });

  const handleConfirm = async () => {
    setIsProcessing(true);
    // assume that it takes 3000 ms to process action.
    await deplay(2000);
    const response = random() === 1 ? true : false;

    setIsProcessing(false);

    if (response) {
      handleDialog({
        open: true,
        title: 'Submit Successfully',
        icon: '/assets/icons/wallets/ic_wis_50.svg',
        message: '[message]',
      });
    } else {
      handleDialog({
        open: true,
        title: 'Please Try Again',
        icon: '/assets/icons/wallets/ic_wis_50_grey.svg',
        subtitle: 'Attack purchase failed.',
        message: '[error]',
      });
    }
  };

  const handleDialogClose = () => {
    setDialogParams({
      open: false,
      title: '',
      subtitle: '',
      icon: '',
      message: '',
    });
    router.replace(PATH_WALLET.dashboard);
  };

  const handleDialog = (params: DialogParamsType) => {
    setDialogParams(params);
  };

  return (
    <>
      <Head>
        <title> Newwit - Wallet Passcode</title>
      </Head>

      <CustomContainer bgcolor="white">
        <Box>
          <SubHeader title="Enter Wallet Passcode" back={PATH_WALLET.dashboard} />
        </Box>
        <Stack mt={1} spacing={6}>
          <OtpInput size={6} value={passcode} onChange={(val) => setPasscode(val)} />
          <CustomButton disabled={passcode.length !== 6} onClick={handleConfirm}>
            Confirm
          </CustomButton>
        </Stack>
      </CustomContainer>

      <CustomDialog open={isProcessing}>
        <Stack alignItems="center" padding="50px 20px 60px 20px">
          <CustomTypography size="xl">Please Wait</CustomTypography>
          <Box mt={3}>
            <CustomSpinner size={ICON.SIZE.xl} />
          </Box>
          <Box mt={3} textAlign="center">
            <CustomTypography size="sm">
              We are verifying your transactions.
              <br />
              Please do not exit.
            </CustomTypography>
          </Box>
        </Stack>
      </CustomDialog>

      <CustomDialog open={dialogParams.open} onClose={handleDialogClose} sx={{ minHeight: 228 }}>
        <Stack alignItems="center" p="50px 20px 60px 20px">
          <CustomTypography size="xl">{dialogParams.title}</CustomTypography>
          <Box my={3}>
            <Image src={dialogParams.icon} sx={{ width: ICON.SIZE.xl, height: ICON.SIZE.xl }} />
          </Box>
          <Stack spacing={1.5} alignItems="center">
            {dialogParams.subtitle !== '' && (
              <CustomTypography size="lg">{dialogParams.subtitle}</CustomTypography>
            )}
            <CustomTypography size="sm">{dialogParams.message}</CustomTypography>
          </Stack>
        </Stack>
      </CustomDialog>
    </>
  );
}

interface DialogParamsType {
  open: boolean;
  title: string;
  icon: string;
  subtitle?: string;
  message: string;
}
