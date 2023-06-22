import QRCodeStyling, { Options as QRCodeStylingOptions, FileExtension } from 'qr-code-styling';

export default function useQRCodeStyling(options: QRCodeStylingOptions): QRCodeStyling | null {
  //Only do this on the client
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const QRCodeStylingLib = require('qr-code-styling');
    const qrCodeStyling: QRCodeStyling = new QRCodeStylingLib(options);
    return qrCodeStyling;
  }
  return null;
}
