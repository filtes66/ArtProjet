import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Header(props) {
  return (
    <ul className="header">
      <li className="header__note">
        <p>SITE DE DEMONSTRATION SEULEMENT</p>
      </li>
      <li className="header__icon">
        <Link to="/" className="header__item">
          {' '}
          <FaHome />
        </Link>
      </li>
      <li>
        <Link to="/liste-des-mouvements-artistiques" className="header__item">
          Mouvements
        </Link>
      </li>
      <li>
        <Link to="/agenda" className="header__item">
          Expositions
        </Link>
      </li>
      <li>
        <Link to="/carte-des-musees" className="header__item">
          Musées
        </Link>
      </li>
    </ul>
  );
}

export default Header;
