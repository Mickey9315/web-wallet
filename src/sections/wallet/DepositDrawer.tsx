import { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Backdrop, Box, Slide, Stack, StackProps } from '@mui/material';

import dynamic from 'next/dynamic';

import AddressBox from 'src/components/address-box/AddressBox';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import CustomButton from 'src/components/custom-button/CustomButton';

const QrCode = dynamic(() => import('src/components/qr-code/QrCode'), {
  ssr: false,
});

const StyledBackdrop = styled(Backdrop)({
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.75)',
  zIndex: 1000,
});

const StyledBox = styled(Stack)({
  position: 'absolute',
  background: 'white',
  borderRadius: '10px 10px 0px 0px',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2000,
  padding: '12px 20px 24px 20px',
});

type Props = {
  open: boolean;
  onClose?: () => void;
} & StackProps;

const DepositDrawer = ({ open, onClose = () => {}, ...other }: Props) => {
  const address = '1234567890123456789012345678901234567890';
  const [btnText, setBtnText] = useState('Copy Address');

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setBtnText('Copied!');
    setTimeout(() => setBtnText('Copy Address'), 5000);
  };

  return (
    <StyledBackdrop open={open} onClick={() => onClose()}>
      <Slide direction="up" in={open} style={{ display: open ? 'block' : 'none' }}>
        <StyledBox {...other} onClick={(e) => e.stopPropagation()}>
          <Stack width={1} borderBottom="4px solid #FAFAFA" alignItems="center">
            <Box width="140px" height="5px" borderRadius="100px" bgcolor="#C4C4C4" />
            <Box my={3}>
              <CustomTypography size="xl">Deposit</CustomTypography>
            </Box>
          </Stack>
          <Stack width={1} alignItems="center">
            <Box mt={3}>
              <CustomTypography size="sm">
                Copy your address to your external wallet
              </CustomTypography>
            </Box>
            <Box mt={1}>
              <AddressBox address={address} />
            </Box>
            <Box my={3}>
              <QrCode data={address} />
            </Box>
            <CustomButton onClick={copyAddress}>{btnText}</CustomButton>
          </Stack>
        </StyledBox>
      </Slide>
    </StyledBackdrop>
  );
};

export default DepositDrawer;
