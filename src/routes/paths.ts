// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------
const ROOTS_WALLET = '/wallet';

export const PATH_AUTH = {
  login: '/login',
  otp: '/otp',
};

export const PATH_PAGE = {
  wallet: '/wallet',
};

export const PATH_WALLET = {
  root: ROOTS_WALLET,
};
