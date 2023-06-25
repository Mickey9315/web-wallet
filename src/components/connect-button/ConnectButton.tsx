import { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

import useResponsive from 'src/hooks/useResponsive';
import { ICON } from 'src/config-global';
import Iconify from '../iconify/Iconify';
import WalletDrawer from '../wallet-drawer/WalletDrawer';

const DesktopButton = styled(Button)({
  borderRadius: '25px',
  borderColor: 'white',
  color: 'white',
  '&:hover': {
    borderColor: 'white',
    background: 'white',
    color: 'black',
  },
});

const MobileButton = styled(Iconify)({
  width: ICON.SIZE.sm,
  height: ICON.SIZE.sm,
  color: '#A180FF',
});

const ConnectButton = (props: ButtonProps) => {
  const isDesktop = useResponsive('up', 'md');
  const [open, setOpen] = useState(false);

  return (
    <>
      {isDesktop ? (
        <DesktopButton variant="outlined" {...props} onClick={() => setOpen(true)}>
          <Iconify icon="pajamas:connected" />
          &nbsp;Connect
        </DesktopButton>
      ) : (
        <MobileButton icon="pajamas:connected" onClick={() => setOpen(true)} />
      )}

      <WalletDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ConnectButton;
