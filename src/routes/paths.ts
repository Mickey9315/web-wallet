// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
  otp: '/otp',
};

export const PATH_PAGE = {
  wallet: '/wallet',
};

const ROOTS_WALLET = '/wallet';

export const PATH_WALLET = {
  root: ROOTS_WALLET,
  dashboard: path(ROOTS_WALLET, '/dashboard'),
  toFriend: path(ROOTS_WALLET, '/to-friend'),
  deposit: path(ROOTS_WALLET, '/deposit'),
  passcode: path(ROOTS_WALLET, '/passcode'),
};
