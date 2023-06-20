import { Stack, StackProps } from '@mui/material';
import CustomTypography from '../custom-typography/CustomTypography';

type Props = {
  children: React.ReactNode;
  label: string;
} & StackProps;

const CustomForm = ({ children, label, ...other }: Props) => (
  <Stack spacing="9px" {...other}>
    <CustomTypography size="lg">{label}</CustomTypography>
    {children}
  </Stack>
);

export default CustomForm;
