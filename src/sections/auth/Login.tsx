import { useState } from 'react';
import { useRouter } from 'next/router';
// @mui
import { Stack, Box } from '@mui/material';

// components
import { FONT } from 'src/config-global';
import { PATH_AUTH } from 'src/routes/paths';

import Image from 'src/components/image/Image';
import CustomButton from 'src/components/custom-button/CustomButton';
import CustomTypography from 'src/components/custom-typography/CustomTypography';

// layouts
import LoginLayout from '../../layouts/login';
import PhoneInput from 'src/components/phone-input/PhoneInput';

// ----------------------------------------------------------------------

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  const handleConfirm = () => {
    router.push(PATH_AUTH.otp);
  };

  return (
    <LoginLayout>
      <Stack direction="column" justifyContent="space-between" height={1}>
        <Box>
          <Box
            sx={{ mt: { xs: 0, lg: 2 }, mb: { xs: 6, lg: 7.5 }, position: 'relative' }}
            textAlign="center"
          >
            <CustomTypography size="xl">Log in with Phone Number</CustomTypography>
          </Box>
          <PhoneInput value={phone} onChange={(val) => setPhone(val)} />
        </Box>
        <CustomButton disabled={phone === ''} onClick={handleConfirm}>
          Confirm
        </CustomButton>
      </Stack>
    </LoginLayout>
  );
}
