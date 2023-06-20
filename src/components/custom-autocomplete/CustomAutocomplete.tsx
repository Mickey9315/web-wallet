import { styled } from '@mui/material/styles';
import {
  Autocomplete,
  AutocompleteCloseReason,
  Box,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItem,
  Popper,
  Stack,
  autocompleteClasses,
} from '@mui/material';
import { useState } from 'react';
import CustomInput from '../custom-input/CustomInput';
import Image from '../image/Image';
import Iconify from '../iconify/Iconify';
import { FONT, ICON } from 'src/config-global';
import CustomTypography from '../custom-typography/CustomTypography';
import { CustomAvatar } from '../custom-avatar';

const StyledPopper = styled(Popper)(({ theme }) => ({
  background: 'white',
  boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px 10px 0px 0px',
  padding: '0 20px 20px 20px',
  width: '100%',
}));

export interface ValueType {
  id: number;
  name: string;
  icon: string;
}

type Props = {
  value: ValueType;
  onChange: (value: ValueType) => void;
  options: ValueType[];
};

const CustomAutocomplete = ({ value, onChange, options }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [pendingValue, setPendingValue] = useState<ValueType>(value);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    onChange(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <CustomInput
        placeholder="Select account"
        value={value.name}
        InputProps={{ readOnly: true }}
        onClick={handleClick}
      />
      <StyledPopper open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <Stack alignItems="center">
            <Box my={2} width="140px" height="5px" borderRadius="100px" bgcolor="#C4C4C4"></Box>
            <CustomInput
              fullWidth
              placeholder="Select account"
              InputProps={{
                sx: {
                  fontWeight: '400 !important',
                  fontSize: '20px !important',
                  lineHeight: '27px !important',
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="akar-icons:search" color="#4F4F4F" height={16} width={16} />
                  </InputAdornment>
                ),
              }}
            />
            <List sx={{ width: 1 }}>
              {options.map((option) => (
                <ListItem>
                  <Stack direction="row" py={1} spacing={0.75} width={1}>
                    <CustomAvatar
                      src={option.icon}
                      sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                    />
                    <CustomTypography size="md">{option.name}</CustomTypography>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Stack>
        </ClickAwayListener>
      </StyledPopper>
    </>
  );
};

export default CustomAutocomplete;
