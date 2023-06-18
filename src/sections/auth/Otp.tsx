import { useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Stack } from '@mui/material';

import { PATH_PAGE } from 'src/routes/paths';

import CustomButton from 'src/components/custom-button/CustomButton';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import LoginLayout from 'src/layouts/login/LoginLayout';
import OtpInput from './OtpInput';

export default function Otp() {
  const router = useRouter();
  const phoneNumber = '+852 0000 0000';
  const [otp, setOtp] = useState('');

  const handleConfirm = () => {
    router.push(PATH_PAGE.wallet);
  };

  return (
    <LoginLayout>
      <Stack direction="column" justifyContent="space-between" height={1}>
        <Box>
          <Box
            sx={{ mt: { xs: 0, lg: 2 }, mb: { xs: 6, lg: 7.5 }, position: 'relative' }}
            textAlign="center"
          >
            <CustomTypography size="xl">
              Enter the OTP sent to <br /> {phoneNumber}
            </CustomTypography>
          </Box>
          <OtpInput value={otp} onChange={(val) => setOtp(val)} />
          <Box mt={2.25} textAlign="center">
            <CustomTypography size="sm">
              Didn’t receveive code?{' '}
              <Box component="span" sx={{ color: '#4200FF', '&:hover': { cursor: 'pointer' } }}>
                Resend
              </Box>{' '}
              (0:30)
            </CustomTypography>
          </Box>
        </Box>
        <CustomButton disabled={otp.length !== 4} onClick={handleConfirm}>
          Confirm
        </CustomButton>
      </Stack>
    </LoginLayout>
  );
}
