// @mui
import { Box } from '@mui/material';

// components
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import Iconify from 'src/components/iconify/Iconify';
import CustomLink from 'src/components/custom-link/CustomLink';

type Props = {
  title: string;
  back?: string;
};

export default function SubHeader({ title, back }: Props) {
  return (
    <Box py={2} textAlign="center" position="relative" width={1}>
      <CustomTypography size="xl">{title}</CustomTypography>
      {back && (
        <Box position="absolute" top={0} height={1} display="flex" alignItems="center">
          <CustomLink href={back}>
            <Iconify icon="ep:arrow-left-bold" width={12} height={12} color="#828282" />
          </CustomLink>
        </Box>
      )}
    </Box>
  );
}
