import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Box, Backdrop, Slide, Stack, StackProps, Divider } from '@mui/material';

import useResponsive from 'src/hooks/useResponsive';
import CustomTypography from '../custom-typography/CustomTypography';
import Iconify from '../iconify/Iconify';

const StyledBackdrop = styled(Backdrop)({
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.75)',
  margin: '0 !important',
  zIndex: 1000,
});

const StyledBox = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  background: 'white',
  borderRadius: '10px 10px 0px 0px',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2000,
  padding: '12px 20px 24px 20px',
  [theme.breakpoints.up('lg')]: {
    borderRadius: '10px',
    top: 10,
    right: 10,
    bottom: 10,
    left: 'unset',
    width: 300,
    zIndex: 2000,
  },
}));

const StyledItem = styled(Stack)({
  alignItems: 'center',
  padding: '20px 24px',
  transition: 'background 0.2s ease-in-out',
  '&:hover': {
    cursor: 'pointer',
    background: 'rgba(0,0,0,0.1)',
  },
});

type Props = {
  open: boolean;
  onClose?: () => void;
} & StackProps;

const WalletDrawer = ({ open, onClose = () => {}, ...other }: Props) => {
  const isDesktop = useResponsive('up', 'lg');
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);

  useEffect(() => {
    if ((window as any).ethereum) {
      // check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  const handleConnect = async () => {
    if (isMetamaskInstalled) {
      (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });
    } else {
      window.open('https://metamask.io', '_blank');
    }
  };

  return (
    <>
      <StyledBackdrop open={open} onClick={() => onClose()}>
        <Slide
          direction={isDesktop ? 'left' : 'up'}
          in={open}
          style={{ display: open ? 'block' : 'none' }}
        >
          <StyledBox {...other} onClick={(e) => e.stopPropagation()}>
            <Stack width={1} borderBottom="4px solid #FAFAFA" alignItems="center">
              <Box width="140px" height="5px" borderRadius="100px" bgcolor="#C4C4C4" />
              <Box my={3}>
                <CustomTypography size="xl">Connect a wallet</CustomTypography>
              </Box>
            </Stack>
            <Stack divider={<Divider />}>
              <StyledItem direction="row" spacing={2} onClick={handleConnect}>
                <Iconify icon="logos:metamask-icon" width={30} />
                <CustomTypography size="lg">Metamask</CustomTypography>
              </StyledItem>
            </Stack>
          </StyledBox>
        </Slide>
      </StyledBackdrop>
    </>
  );
};
export default WalletDrawer;
