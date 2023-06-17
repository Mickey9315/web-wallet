import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/material';
import { customFontStyle } from './styles';

type Props = {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children: React.ReactNode;
  sx?: any;
} & TypographyProps;

const CustomTypography = ({ size = 'md', sx, children, ...other }: Props) => {
  return (
    <Typography sx={{ ...sx, ...customFontStyle[size] }} {...other}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
