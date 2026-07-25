import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <span className="not-found__code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="not-found__btn">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
