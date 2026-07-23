import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="top-nav">
      <Link to="/" className="top-nav__logo" onClick={closeMenu}>
        <img src={logo} alt="Company logo" />
      </Link>

      <button
        type="button"
        className={`top-nav__toggle${isMenuOpen ? ' top-nav__toggle--open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="top-nav-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="top-nav-menu"
        className={`top-nav__menu${isMenuOpen ? ' top-nav__menu--open' : ''}`}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/buy" onClick={closeMenu}>Buy</Link>
        <a
          href="https://app.hamaralabs.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
