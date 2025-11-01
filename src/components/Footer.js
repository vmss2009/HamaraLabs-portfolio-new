import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/buy">Buy</a></li>
            <li><a href="https://app.hamaralabs.com" target="_blank" rel="noopener noreferrer">Login</a></li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
