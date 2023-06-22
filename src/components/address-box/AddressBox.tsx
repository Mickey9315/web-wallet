import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledRoot = styled(Box)({
  background: 'linear-gradient(to right, #4423FF, #07EED6)',
  padding: '1px',
  borderRadius: '100px',
  width: 'fit-content',
});

const StyledContent = styled(Box)({
  background: 'white',
  padding: '10px',
  borderRadius: '100px',
  width: 'fit-content',
});

const StyledAddress = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '12px',
  lineHeight: '14px',
});

type Props = {
  address: string;
};

const AddressBox = ({ address }: Props) => (
  <StyledRoot>
    <StyledContent>
      <StyledAddress>{address}</StyledAddress>
    </StyledContent>
  </StyledRoot>
);

export default AddressBox;
