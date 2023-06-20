import { styled } from '@mui/material/styles';
import { Stack, StackProps } from '@mui/material';

const StyledContainer = styled(Stack)({
  padding: '0 20px 24px 20px',
  width: '100%',
  height: '100%',
});

type Props = {
  children: React.ReactNode;
} & StackProps;

const CustomContainer = ({ children, ...other }: Props) => (
  <StyledContainer {...other}>{children}</StyledContainer>
);

export default CustomContainer;
