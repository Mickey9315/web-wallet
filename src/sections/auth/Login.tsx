import { useState } from 'react';
import { useRouter } from 'next/router';
// @mui
import { Stack, Typography, Select, MenuItem, Divider, TextField, Box } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
//
import Image from 'src/components/image/Image';
import CustomButton from 'src/components/custom-button/CustomButton';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import { customFontStyle } from 'src/components/custom-typography';


// ----------------------------------------------------------------------

export default function Login() {
  const router = useRouter();

  const codes = [
    {
      countryCode: 'HK',
      flag: '/assets/icons/flags/ic_hk.png',
      phoneCode: '+852',
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleConfirm = () => {
    router.push('/otp');
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
          <Stack
            direction="row"
            bgcolor="#F2F2F2"
            borderRadius="5px"
            height={62}
            px={2.5}
            alignItems="center"
          >
            <Select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              sx={{
                border: 0,
                '.MuiSelect-select': { p: 0, pr: '16px !important' },
                '.MuiOutlinedInput-notchedOutline': { border: '0 !important' },
                '.MuiSvgIcon-root': { right: 0, color: 'black' },
              }}
            >
              {codes.map((code, index) => (
                <MenuItem value={index} key={index}>
                  <Image src={code.flag} sx={{ width: 33, height: 33 }} />
                </MenuItem>
              ))}
            </Select>
            <Divider orientation="vertical" sx={{ borderColor: '#E0E0E0', mx: 1.5 }} />
            <Typography fontSize="16px" lineHeight="22px">
              {codes[selectedIndex].phoneCode}
            </Typography>
            <TextField
              type="tel"
              placeholder="0000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                '.MuiOutlinedInput-notchedOutline': { border: '0 !important' },
                '.MuiInputBase-input': { p: '0', ml: '12px', ...customFontStyle.md },
                '&:placeholder': { color: '#828282' },
              }}
            />
          </Stack>
        </Box>
        <CustomButton disabled={phoneNumber == '' ? true : false} onClick={handleConfirm}>
          Confirm
        </CustomButton>
      </Stack>
    </LoginLayout>
  );
}
