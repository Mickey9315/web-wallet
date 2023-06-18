import { Typography, TypographyProps } from '@mui/material';
import { FONT } from 'src/config-global';

type Props = {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children: React.ReactNode;
  sx?: any;
} & TypographyProps;

const CustomTypography = ({ size = 'md', sx, children, ...other }: Props) => (
  <Typography sx={{ ...sx, ...FONT[size] }} {...other}>
    {children}
  </Typography>
);

export default CustomTypography;
