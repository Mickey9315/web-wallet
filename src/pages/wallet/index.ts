import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PATH_WALLET } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === PATH_WALLET.root) {
      router.replace(PATH_WALLET.dashboard);
    }
  });

  return null;
}
