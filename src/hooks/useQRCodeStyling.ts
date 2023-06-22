import QRCodeStyling, { Options as QRCodeStylingOptions } from 'qr-code-styling';

const qrOptions: QRCodeStylingOptions = {
  width: 288,
  height: 288,
  margin: 0,
  dotsOptions: {
    color: 'black',
    type: 'square',
  },
  backgroundOptions: { color: '#ffffff' },
  cornersSquareOptions: { type: 'extra-rounded', color: '#000000' },
  cornersDotOptions: { type: 'dot', color: '#000000' },
  qrOptions: { typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' },
};

export default function useQRCodeStyling(): QRCodeStyling | null {
  // Only do this on the client
  if (typeof window !== 'undefined') {
    const qrCodeStyling: QRCodeStyling = new QRCodeStyling(qrOptions);
    return qrCodeStyling;
  }
  return null;
}
