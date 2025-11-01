import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CategoryPage.css';

function ATLs() {
  const categoryColor = '#63b46b';
  const categoryDarkColor = '#4aa460';

  return (
    <>
      <Header />
      <Link to="/" className="back-btn">
        ← Back to Categories
      </Link>
      <main className="hero-grid">
        <section className="info-card" style={{ background: `linear-gradient(160deg, ${categoryDarkColor}, ${categoryColor})` }}>
          <h2>ATLs and Makerspaces</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
            diam ac lorem dictum posuere sit amet sit amet erat. Quisque ultrices
            libero quis mauris interdum, sed luctus nibh mollis.
          </p>
          <p className="info-card__footnote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            pretium mauris.
          </p>
        </section>

        <section className="impact-card" style={{ background: categoryColor }}>
          <div className="impact-card__content">
            <h1>1.4M+</h1>
            <h3>Lorem ipsum dolor sit amet, 20,000+ lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              libero ut mauris ullamcorper volutpat. Nulla facilisi.
            </p>
          </div>
          <svg
            className="impact-card__chart"
            viewBox="0 0 400 120"
            role="img"
            aria-label="Placeholder growth chart"
          >
            <path
              d="M10 100 L70 80 L130 90 L190 60 L250 65 L310 40 L370 45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <g fill="currentColor">
              <circle cx="70" cy="80" r="8" />
              <circle cx="130" cy="90" r="8" />
              <circle cx="190" cy="60" r="8" />
              <circle cx="250" cy="65" r="8" />
              <circle cx="310" cy="40" r="8" />
              <circle cx="370" cy="45" r="8" />
            </g>
          </svg>
        </section>

        <section className="photo-card" aria-label="Placeholder illustration">
          <div className="photo-card__image" />
        </section>

        <section className="cta-grid">
          <a className="cta-card" style={{ background: categoryColor }} href="#annual">
            Annual Reports
          </a>
          <a className="cta-card" style={{ background: categoryColor }} href="#program">
            Program Reports
          </a>
          <a className="cta-card" style={{ background: categoryColor }} href="#case">
            Case Studies
          </a>
          <a className="cta-card" style={{ background: categoryDarkColor, color: '#ffffff' }} href="#theme">
            Curriculum by Theme
          </a>
          <a className="cta-card" style={{ background: categoryDarkColor, color: '#ffffff' }} href="#grade">
            Curriculum by Grade
          </a>
          <div className="cta-card cta-card--art">
            <svg
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M72 20c-10 0-18 8-18 8s8 18 18 18 18-8 18-18-8-18-18-18zm0 28a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
                fill="currentColor"
              />
              <path
                d="M32 74c16-14 32-22 46-20 12 1 20 9 22 22 2 11-2 20-10 26-13 10-38 9-63-8-8-5-11-15-6-23 2-4 6-7 11-9z"
                fill="currentColor"
                opacity="0.55"
              />
              <path
                d="M18 94c18 14 39 22 58 20"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>
        </section>
      </main>
      <Footer backgroundColor={categoryDarkColor} />
    </>
  );
}

export default ATLs;
