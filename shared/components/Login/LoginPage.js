import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaLock } from 'react-icons/fa';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './LoginPage.css';

function LoginPage() {
  let [login_pwd, setloginData] = useState('');
  const { setAuth } = useContext(AuthContext);

  const handleOnChange = (event) => {
    setloginData(event.target.value);
  };

  const loginDataSubmit = (event) => {
    event.preventDefault();
    fetch(`${REACT_APP_BASE_URL}/login-user/?login_pwd=${login_pwd}`)
      //   .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          setAuth({ isAuthenticated: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="login-container">
      <form onSubmit={loginDataSubmit} className="login-form">
        <div className="login-input-req">
          <label htmlFor="pass">Mot de passe</label>
        </div>
        <div className="login-input-field">
          <div className="login-lock">
            <FaLock />
          </div>
          <input
            name="pass"
            id="pass"
            required
            maxLength="20"
            className="login-input"
            autoComplete="off"
            onChange={handleOnChange}
          />
        </div>
        <div className="login-btn">
          <button name="login" type="submit" className="login-submit">
            Connexion
          </button>
        </div>
      </form>
      <h3 className="login-titre-1">DEVELOPPEMENT WEB</h3>
      <h1 className="login-titre-2">PROJET REACT + NODE + MySQL</h1>
    </div>
  );
}

export default LoginPage;
