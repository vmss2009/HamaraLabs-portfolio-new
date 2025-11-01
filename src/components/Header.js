import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="top-nav">
      <Link to="/" className="top-nav__logo">
        <img src={logo} alt="Company logo" />
      </Link>
      <nav className="top-nav__menu">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <a href="https://app.hamaralabs.com" target="_blank" rel="noopener noreferrer">
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
