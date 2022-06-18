import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, isAuthenticated: false });

  useEffect(() => {
    setAuth({
      loading: false,
      isAuthenticated: JSON.parse(
        window.localStorage.getItem('isAuthenticated172'),
      ),
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'isAuthenticated172',
      JSON.stringify(auth.isAuthenticated),
    );
  }, [auth.isAuthenticated]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
