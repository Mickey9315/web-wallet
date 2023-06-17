import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledInput = styled('input')({
  border: '1px solid #828282',
  borderRadius: '5px',
  width: 38,
  height: 61,
  color: '#4200FF',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '41px',
  '&:focus-visible': {
    outline: 'none',
  },
  '&:not([value=""])': {
    border: '2px solid #4200FF',
  },
});

type Props = {
  value: string;
  onChange(value: string): void;
  size?: number;
  validationPattern?: RegExp;
};

const OtpInput = (props: Props) => {
  const { size = 4, validationPattern = /[0-9]{1}/, value, onChange, ...other } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const elem = e.target;
    const val = e.target.value;
    // check if the value is valid
    if (!validationPattern.test(val) && val !== '') return;

    // change the value of the upper state using onChange
    const valueArr = value.split('');
    valueArr[index] = val;
    const newVal = valueArr.join('').slice(0, size);
    onChange(newVal);

    //focus the next element if there's a value
    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === 'ArrowRight') {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.clipboardData.getData('text').substring(0, size);
    onChange(val);
  };

  // Create an array based on the size.
  const arr = new Array(size).fill('-');
  return (
    <Box display="flex" justifyContent="space-between">
      {/* Map through the array and render input components */}
      {arr.map((_, index) => {
        return (
          <StyledInput
            key={index}
            {...other}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={size}
            value={value.at(index) ?? ''}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
            onPaste={handlePaste}
          />
        );
      })}
    </Box>
  );
};

export default OtpInput;
