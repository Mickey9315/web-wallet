import { useState } from 'react';
// mui
import { Autocomplete, Box, InputAdornment, Stack } from '@mui/material';
// next
import Head from 'next/head';
// components
import CustomContainer from 'src/components/custom-container/CustomContainer';
import DashboardLayout from '../../layouts/dashboard';

import { PATH_WALLET } from 'src/routes/paths';

import SubHeader from '../../sections/wallet/SubHeader';
import CustomButton from 'src/components/custom-button/CustomButton';
import CustomForm from 'src/components/custom-form/CustomForm';
import Image from 'src/components/image/Image';
import { ICON } from 'src/config-global';
import CustomInput from 'src/components/custom-input/CustomInput';
import CustomAutocomplete, { ValueType } from 'src/components/custom-autocomplete/CustomAutocomplete';

// ----------------------------------------------------------------------

ToFriend.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ToFriend() {
  const [account, setAccount] = useState<ValueType>({ id: 1, name: 'Adam Chan', icon: '/assets/images/portraits/portrait_6.jpg' });
  const [amount, setAmount] = useState('');

  const users = [
    { id: 1, name: 'Adam Chan', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 2, name: 'User 2', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 3, name: 'User 3', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 4, name: 'User 4', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 5, name: 'User 5', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 6, name: 'User 6', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 7, name: 'User 7', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 8, name: 'User 8', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 9, name: 'User 9', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 10, name: 'User 10', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 11, name: 'User 11', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 12, name: 'User 12', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 13, name: 'User 13', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 14, name: 'User 14', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 15, name: 'User 15', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 16, name: 'User 16', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 17, name: 'User 17', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 18, name: 'User 18', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 19, name: 'User 19', icon: '/assets/images/portraits/portrait_6.jpg' },
    { id: 20, name: 'User 20', icon: '/assets/images/portraits/portrait_6.jpg' },
  ];

  return (
    <>
      <Head>
        <title> Newwit - Wallet - To Friend</title>
      </Head>

      <CustomContainer bgcolor="white">
        <Box>
          <SubHeader title="To Friend" back={PATH_WALLET.dashboard} />
        </Box>
        <Stack mt={1} justifyContent="space-between" height={1}>
          <Stack spacing="25px">
            <CustomForm label="To">
              <CustomAutocomplete
                value={account}
                onChange={(value: any) => setAccount(value)}
                options={users}
              />
            </CustomForm>
            <CustomForm label="Amount">
              <CustomInput
                placeholder="Enter the amount"
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
                }}
              />
            </CustomForm>
          </Stack>
          <CustomButton disabled={amount === ''}>Confirm</CustomButton>
        </Stack>
      </CustomContainer>
    </>
  );
}