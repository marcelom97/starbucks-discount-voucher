import { createContext } from 'react';

export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  token: null,
  setToken: () => {},
  refreshToken: null,
  setRefreshToken: () => {},
});
