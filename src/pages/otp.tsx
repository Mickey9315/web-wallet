// next
import Head from 'next/head';
// sections
import Otp from 'src/sections/auth/Otp';
// auth
import GuestGuard from '../auth/GuestGuard';

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
