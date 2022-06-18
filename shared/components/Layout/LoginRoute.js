import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LoginPage from '../Login/LoginPage';

function LoginRoute({ children }) {
  const { auth } = useContext(AuthContext);
  console.log('auth : ', auth);

  if (auth.loading) {
    return null;
  }

  return auth.isAuthenticated === true ? children : <LoginPage />;
}

export default LoginRoute;
