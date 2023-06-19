// next
import { useRouter } from 'next/router';

// @mui
import { Box, Link } from '@mui/material';

// components
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import Iconify from 'src/components/iconify/Iconify';

type Props = {
  title: string;
  back: string;
};

export default function SubHeader({ title, back }: Props) {
  return (
    <Box py={2} textAlign="center" position="relative" width={1}>
      <CustomTypography size="xl">{title}</CustomTypography>
      <Box position="absolute" top={0} height={1} display="flex" alignItems="center">
        <Link href={back}>
          <Iconify icon="ep:arrow-left-bold" width={12} height={12} color="#828282" />
        </Link>
      </Box>
    </Box>
  );
}
