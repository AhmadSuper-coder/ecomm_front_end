// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAccessToken, getRefreshToken } from '../utils/CommonUtils';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check the validity of access token
    if (getAccessToken() && getRefreshToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login_state = () => {
    setIsLoggedIn(true);
  };

  const logout_state = () => {
    // Clear the access token and any other related information
    // ...
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login_state, logout_state }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
