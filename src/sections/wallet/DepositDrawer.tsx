import { useEffect, useRef, useState } from 'react';
import { Options as QRCodeStylingOptions } from 'qr-code-styling';

import { styled } from '@mui/material/styles';
import { Backdrop, Box, Slide, Stack, StackProps } from '@mui/material';

import AddressBox from 'src/components/address-box/AddressBox';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import useQRCodeStyling from 'src/hooks/useQRCodeStyling';
import CustomButton from 'src/components/custom-button/CustomButton';

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

const qrOptions: QRCodeStylingOptions = {
  width: 288,
  height: 288,
  margin: 0,
  dotsOptions: {
    color: 'black',
    type: 'square',
  },
  backgroundOptions: { color: '#ffffff' },
  cornersSquareOptions: { type: 'extra-rounded', color: '#000000' },
  cornersDotOptions: { type: 'dot', color: '#000000' },
  qrOptions: { typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' },
};

type Props = {
  open: boolean;
  onClose?: () => void;
} & StackProps;

const DepositDrawer = ({ open, onClose = () => {}, ...other }: Props) => {
  const address = '1234567890123456789012345678901234567890';
  const qrCode = useQRCodeStyling(qrOptions);
  const ref = useRef<any>(null);
  const [btnText, setBtnText] = useState('Copy Address');

  useEffect(() => {
    qrCode?.append(ref.current);
  }, [ref, qrCode]);

  useEffect(() => {
    qrCode?.update({ data: address });
  }, [address, qrCode]);

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
            <Box width="140px" height="5px" borderRadius="100px" bgcolor="#C4C4C4"></Box>
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
            <Box my={3} p={1}>
              <Box ref={ref}></Box>
            </Box>
            <CustomButton onClick={copyAddress}>{btnText}</CustomButton>
          </Stack>
        </StyledBox>
      </Slide>
    </StyledBackdrop>
  );
};

export default DepositDrawer;
