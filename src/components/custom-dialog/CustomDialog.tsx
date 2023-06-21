import { Backdrop, Box, Fade, Stack, StackProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from '../iconify/Iconify';

const StyledBackdrop = styled(Backdrop)({
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.75)',
});

const StyledBox = styled(Stack)({
  position: 'absolute',
  background: 'white',
  borderRadius: 0,
  top: '50%',
  left: '20px',
  right: '20px',
  transform: 'translateY(-50%)',
});

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
} & StackProps;

const CustomDialog = ({ open, onClose = () => {}, children, ...other }: Props) => (
  <StyledBackdrop open={open} onClick={() => onClose()}>
    <Fade in={open}>
      <StyledBox {...other} onClick={(e) => e.stopPropagation()}>
        {onClose && onClose.toString() !== (() => {}).toString() && (
          <Box position="relative">
            <Iconify
              icon="system-uicons:cross"
              width={25}
              height={25}
              sx={{ position: 'absolute', top: 32, right: 24 }}
              onClick={() => onClose()}
            />
          </Box>
        )}
        {children}
      </StyledBox>
    </Fade>
  </StyledBackdrop>
);

export default CustomDialog;
