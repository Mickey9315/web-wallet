import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const StyledContainer = styled(Container)({
  padding: '0 20px',
});

const CustomContainer = ({ children, ...other }: any) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default CustomContainer;
