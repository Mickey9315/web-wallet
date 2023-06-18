import { Stack } from '@mui/material';
import { CustomAvatar } from 'src/components/custom-avatar';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import Iconify from 'src/components/iconify/Iconify';
import Image from 'src/components/image/Image';
import { ICON } from 'src/config-global';

export default function WalletHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" py={1.5} alignItems="center">
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Image
            src="/assets/icons/wallets/ic_wisdom_20.svg"
            sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
          />
          <CustomTypography size="sm">500</CustomTypography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Image
            src="/assets/icons/wallets/ic_wis_20.svg"
            sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
          />
          <CustomTypography size="sm">500</CustomTypography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Image
            src="/assets/icons/wallets/ic_matic_20.svg"
            sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
          />
          <CustomTypography size="sm">500</CustomTypography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1}>
        <CustomAvatar
          src="/assets/images/portraits/portrait_6.jpg"
          sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
        />
        <Iconify
          icon="ic:baseline-logout"
          sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm, color: '#A180FF' }}
        />
      </Stack>
    </Stack>
  );
}
