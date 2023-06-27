import { Stack, Select, MenuItem, TextField, Divider } from '@mui/material';
import {
  CountryIso2,
  defaultCountries,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { CircleFlag } from 'react-circle-flags';

import CustomTypography from '../custom-typography/CustomTypography';
import { FONT } from 'src/config-global';

type Props = {
  value: string;
  onChange: (phone: string) => void;
};

const countries = defaultCountries.map((item) => parseCountry(item));

const PhoneInput = ({ value, onChange }: Props) => {
  const getCountryFromCode = (countryCode: string) => {
    return countries.find((item) => item.iso2 === countryCode)?.dialCode;
  };
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
    <Stack
      direction="row"
      bgcolor="#F2F2F2"
      borderRadius="5px"
      height={62}
      px={2.5}
      alignItems="center"
      divider={<Divider orientation="vertical" sx={{ borderColor: '#E0E0E0', mx: 1.5 }} flexItem />}
    >
      <Select
        value={country}
        onChange={(e) => setCountry(e.target.value as CountryIso2)}
        sx={{
          border: 0,
          '.MuiSelect-select': { p: 0, pr: '16px !important' },
          '.MuiOutlinedInput-notchedOutline': { border: '0 !important' },
          '.MuiSvgIcon-root': { right: 0, color: 'black' },
        }}
        renderValue={(value) => <CircleFlag countryCode={value} height="33" />}
        MenuProps={{
          sx: { height: 300, transform: 'translate(-42px, 15px)' },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
      >
        {defaultCountries.map((c, idx) => {
          const country = parseCountry(c);
          return (
            <MenuItem value={country.iso2} key={idx}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CircleFlag countryCode={country.iso2} height="33" />
                <CustomTypography size="sm">{country.name}</CustomTypography>
                <CustomTypography size="sm" color="gray">
                  +{country.dialCode}
                </CustomTypography>
              </Stack>
            </MenuItem>
          );
        })}
      </Select>
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
  );
};

export default PhoneInput;
