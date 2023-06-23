import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import QRCodeStyling, { Options as QRCodeStylingOptions } from 'qr-code-styling';

const qrOptions: QRCodeStylingOptions = {
  margin: 8,
  dotsOptions: {
    color: 'black',
    type: 'square',
  },
  backgroundOptions: { color: '#ffffff' },
  cornersSquareOptions: { type: 'extra-rounded', color: '#000000' },
  cornersDotOptions: { type: 'dot', color: '#000000' },
  qrOptions: { typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' },
};

type Props = {
  data: string;
  size?: number;
};

const QrCode = ({ data, size = 296 }: Props) => {
  const container = useRef<any>(null);

  useEffect(() => {
    const containerEl = container.current;
    const qrCode = new QRCodeStyling({ ...qrOptions, data, width: size, height: size });
    qrCode.append(containerEl!);
    return () => {
      containerEl!.innerHTML = '';
    };
  }, [data, size]);

  return <Box ref={container} />;
};

export default QrCode;
