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
  depositWISDOM: path(ROOTS_WALLET, '/deposit-wisdom'),
  toWIS: path(ROOTS_WALLET, '/to-wis'),
  toFriend: path(ROOTS_WALLET, '/to-friend'),
  toWISDOM: path(ROOTS_WALLET, '/to-wisdom'),
  toExternal: path(ROOTS_WALLET, '/to-external'),
  withdraw: path(ROOTS_WALLET, '/withdraw'),
  passcode: path(ROOTS_WALLET, '/passcode'),
};
