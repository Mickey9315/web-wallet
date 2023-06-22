import { useState } from 'react';

import { styled } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItem,
  Stack,
} from '@mui/material';

import { ICON, MAIN } from 'src/config-global';

import CustomInput from '../custom-input/CustomInput';
import Iconify from '../iconify/Iconify';
import CustomTypography from '../custom-typography/CustomTypography';
import { CustomAvatar } from '../custom-avatar';
import Scrollbar from '../scrollbar/Scrollbar';

const StyledSearchBox = styled(Stack)(({ theme }) => ({
  background: 'white',
  boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px 10px 0px 0px',
  width: '100%',
  height: 'calc(100% - 60px)',
  padding: '0 20px 20px 20px',
  overflowY: 'auto',
  position: 'absolute',
  top: '60px !important',
  alignItems: 'center',
  marginLeft: '-20px !important',
  zIndex: '10',
  [theme.breakpoints.up('md')]: {
    width: MAIN.W_DESKTOP,
    height: MAIN.H_DESKTOP - 60,
  },
}));

const StyledList = styled(List)({
  width: '100%',
  '& > li': {
    padding: '0',
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: 'blue',
    },
  },
});

export interface ValueType {
  value: any;
  label: string;
  icon: string;
}

type Props = {
  value: any;
  onChange: (value: any) => void;
  options: ValueType[];
};

const CustomAutocomplete = ({ value, onChange, options }: Props) => {
  const [searchBox, setSearchBox] = useState(false);
  const [search, setSearch] = useState('');
  const [pendingValue, setPendingValue] = useState<ValueType>();

  const handleClick = () => {
    setSearchBox(true);
  };

  const handleClose = () => {
    setSearchBox(false);
    setSearch('');
  };

  const handleSelect = (option: ValueType) => {
    setPendingValue(option);
    onChange(option.value);
    handleClose();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  return (
    <>
      <CustomInput
        placeholder="Select account"
        value={pendingValue?.label || ''}
        InputProps={{
          readOnly: true,
          startAdornment: pendingValue?.icon ? (
            <InputAdornment position="start">
              <Avatar src={pendingValue?.icon} sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }} />
            </InputAdornment>
          ) : (
            false
          ),
        }}
        onClick={handleClick}
      />
      {searchBox && (
        <Box>
          <ClickAwayListener onClickAway={handleClose}>
            <StyledSearchBox>
              <Box my={2} width="140px" height="5px" borderRadius="100px" bgcolor="#C4C4C4" />
              <CustomInput
                fullWidth
                placeholder="Select account"
                value={search}
                onChange={handleSearch}
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
              <Scrollbar sx={{ width: 1, mt: 1 }}>
                <StyledList>
                  {options.map(
                    (option, idx) =>
                      option.label.includes(search) && (
                        <ListItem key={idx} onClick={() => handleSelect(option)}>
                          <Stack direction="row" py={1} spacing={0.75} width={1}>
                            <CustomAvatar
                              src={option.icon}
                              sx={{ width: ICON.SIZE.sm, height: ICON.SIZE.sm }}
                            />
                            <CustomTypography size="md">{option.label}</CustomTypography>
                          </Stack>
                        </ListItem>
                      )
                  )}
                </StyledList>
              </Scrollbar>
            </StyledSearchBox>
          </ClickAwayListener>
        </Box>
      )}
    </>
  );
};

export default CustomAutocomplete;
