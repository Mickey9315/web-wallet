import { Typography, TypographyProps } from '@mui/material';
import { FONT } from 'src/config-global';

type Props = {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children: React.ReactNode;
} & TypographyProps;

const CustomTypography = ({ size = 'md', children, ...other }: Props) => (
  <Typography {...FONT[size]} {...other}>
    {children}
  </Typography>
);

export default CustomTypography;
