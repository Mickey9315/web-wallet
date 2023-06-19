import { Box, Button, Divider, Stack } from '@mui/material';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import Image from 'src/components/image/Image';
import { FONT, ICON } from 'src/config-global';

export default function HistoryBox() {
  const items = [
    {
      icon: '/assets/icons/wallets/ic_expert.svg',
      title: 'Domain Expert Reward',
      detail: '[Details]',
      value: '+Xx.00',
    },
    {
      icon: '/assets/icons/wallets/ic_withdraw.svg',
      title: 'Withdraw',
      detail: 'code',
      value: '-100.00',
      status: '[Pending]',
    },
    {
      icon: '/assets/icons/wallets/ic_attack.svg',
      title: 'Purchased Attacks',
      detail: 'code',
      value: '-100.00',
      status: '[Pending]',
    },
    {
      icon: '/assets/icons/wallets/ic_leaderboard.svg',
      title: 'From leaderboard',
      detail: '[Details]',
      value: '+50.00',
      status: 'Not claimbed yet',
    },
  ];

  return (
    <Box>
      <CustomTypography size="xl">History</CustomTypography>
      <Stack
        direction="row"
        mx={-2.5}
        my={1}
        px={2.5}
        py={1.25}
        bgcolor="#F2F2F2"
        alignItems="center"
        justifyContent="space-between"
      >
        <CustomTypography size="sm">You have earned xxx WISDOM this month.</CustomTypography>
        <Button sx={{ bgcolor: '#02EED6', borderRadius: '3px', color: 'black', ...FONT.sm }}>
          Earn More
        </Button>
      </Stack>
      <Stack mt={1.5} divider={<Divider sx={{ borderColor: '#E0E0E0', my: 1 }} flexItem />}>
        {items.map((item, idx) => (
          <HistoryItem key={idx} {...item} />
        ))}
      </Stack>
    </Box>
  );
}

type HistoryItemProps = {
  icon: string;
  title: string;
  detail: string;
  value: string;
  status?: string;
};

function HistoryItem({ icon, title, detail, value, status }: HistoryItemProps) {
  return (
    <Box px={1.25} py={1.5}>
      <Stack direction="row" spacing={0.75} alignItems="flex-start">
        <Image src={icon} sx={{ width: ICON.SIZE.md, height: ICON.SIZE.md }} />
        <Stack alignItems="flex-start" spacing={1}>
          <CustomTypography size="lg" color="black">
            {title}
          </CustomTypography>
          <CustomTypography size="sm" fontStyle="italic" color="#828282">
            {detail}
          </CustomTypography>
        </Stack>
        <Stack alignItems="flex-end" spacing={1} flex={1}>
          <CustomTypography size="lg" color="black">
            {value}
          </CustomTypography>
          {status && (
            <CustomTypography size="sm" fontStyle="italic" color="#828282">
              {status}
            </CustomTypography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
