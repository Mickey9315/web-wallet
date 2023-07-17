import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Stack,
  TextField,
  Divider,
  InputAdornment,
  Popper,
  ClickAwayListener,
  Fade,
} from '@mui/material';
import {
  CountryIso2,
  defaultCountries,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { CircleFlag } from 'react-circle-flags';

import { FONT } from 'src/config-global';
import CustomTypography from '../custom-typography/CustomTypography';
import Iconify from '../iconify/Iconify';
import CustomInput from '../custom-input/CustomInput';
import Scrollbar from '../scrollbar/Scrollbar';

const StyledPopper = styled(Popper)({
  background: 'white',
  width: 300,
  boxShadow: '0 10px 10px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  top: '15px !important',
  left: '-17px !important',
  padding: '12px 16px',
});

type Props = {
  value: string;
  onChange: (phone: string) => void;
};

const countries = defaultCountries.map((item) => parseCountry(item));

const PhoneInput = ({ value, onChange }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSearch('');
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  const handleSelect = (code: CountryIso2) => {
    setCountry(code);
    handleClose();
  };

  const getCountryFromCode = (countryCode: string) =>
    countries.find((item) => item.iso2 === countryCode)?.dialCode;

  const { phone, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
    defaultCountry: 'us',
    value,
    countries: defaultCountries,
    disableDialCodeAndPrefix: true,
    onChange: (data) => {
      onChange(data.phone);
    },
  });

  return (
    <>
      <Stack
        direction="row"
        bgcolor="#F2F2F2"
        borderRadius="5px"
        height={62}
        px={2.5}
        alignItems="center"
        divider={
          <Divider orientation="vertical" sx={{ borderColor: '#E0E0E0', mx: 1.5 }} flexItem />
        }
      >
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          onClick={handleClick}
          sx={{ '&:hover': { cursor: 'pointer' } }}
        >
          <CircleFlag countryCode={country} height="33" />
          <Iconify icon={openMenu ? 'uiw:up' : 'uiw:down'} color="black" width={16} height={16} />
        </Stack>
        <Stack direction="row" alignItems="center">
          <CustomTypography size="md">+{getCountryFromCode(country)}</CustomTypography>
          <TextField
            type="tel"
            placeholder="0000-0000"
            value={phone}
            onChange={handlePhoneValueChange}
            inputRef={inputRef}
            sx={{
              '.MuiOutlinedInput-notchedOutline': { border: '0 !important' },
              '.MuiInputBase-input': { p: '0', ml: '12px', ...FONT.md },
              '&:placeholder': { color: '#828282' },
            }}
          />
        </Stack>
      </Stack>
      <StyledPopper open={openMenu} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <Fade in={openMenu}>
            <Stack>
              <CustomInput
                fullWidth
                placeholder="Search"
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
              <Scrollbar sx={{ width: 1, mt: 1, maxHeight: 240 }}>
                <Stack spacing={1}>
                  {defaultCountries
                    .map((c) => parseCountry(c))
                    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
                    .map((c, idx) => (
                      <CountryListItem
                        key={idx}
                        countryInfo={c}
                        handleSelect={() => handleSelect(c.iso2)}
                      />
                    ))}
                </Stack>
              </Scrollbar>
            </Stack>
          </Fade>
        </ClickAwayListener>
      </StyledPopper>
    </>
  );
};

type CountryListItemPrpos = {
  countryInfo: any;
  handleSelect: (value: any) => void;
};

const CountryListItem = ({ countryInfo, handleSelect }: CountryListItemPrpos) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    onClick={() => handleSelect(countryInfo.iso2)}
    sx={{ '&:hover': { cursor: 'pointer' } }}
  >
    <CircleFlag countryCode={countryInfo.iso2} height="33" />
    <CustomTypography size="sm">{countryInfo.name}</CustomTypography>
    <CustomTypography size="sm" color="gray">
      +{countryInfo.dialCode}
    </CustomTypography>
  </Stack>
);

export default PhoneInput;
