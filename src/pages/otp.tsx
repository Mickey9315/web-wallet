// next
import Head from 'next/head';
// auth
import GuestGuard from '../auth/GuestGuard';
// sections
import Otp from 'src/sections/auth/Otp';

// ----------------------------------------------------------------------

export default function OtpPage() {
  return (
    <>
      <Head>
        <title> Newwit - Enter OTP</title>
      </Head>

      <GuestGuard>
        <Otp />
      </GuestGuard>
    </>
  );
}
