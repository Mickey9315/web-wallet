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
import CustomAutocomplete from 'src/components/custom-autocomplete/CustomAutocomplete';
import SubHeader from '../../sections/wallet/SubHeader';

import DashboardLayout from '../../layouts/dashboard';

// ----------------------------------------------------------------------

ToFriend.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ToFriend() {
  const router = useRouter();
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState('');

  const users = [
    { id: 1, name: 'Adam Chan', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 2, name: 'User 2', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 3, name: 'User 3', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 4, name: 'User 4', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 5, name: 'User 5', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 6, name: 'User 6', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 7, name: 'User 7', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 8, name: 'User 8', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 9, name: 'User 9', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 10, name: 'User 10', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 11, name: 'User 11', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 12, name: 'User 12', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 13, name: 'User 13', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 14, name: 'User 14', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 15, name: 'User 15', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 16, name: 'User 16', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 17, name: 'User 17', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 18, name: 'User 18', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 19, name: 'User 19', avatar: '/assets/images/portraits/portrait_6.jpg' },
    { id: 20, name: 'User 20', avatar: '/assets/images/portraits/portrait_6.jpg' },
  ];

  const handleConfirm = () => {
    router.replace(PATH_WALLET.dashboard);
  };

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
          <Stack spacing={3}>
            <CustomForm label="To">
              <CustomAutocomplete
                value={account}
                onChange={(value: any) => setAccount(value)}
                options={users.map((user) => ({
                  value: user.id,
                  label: user.name,
                  icon: user.avatar,
                }))}
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
          <CustomButton disabled={account !== null && amount === ''} onClick={handleConfirm}>
            Confirm
          </CustomButton>
        </Stack>
      </CustomContainer>
    </>
  );
}
