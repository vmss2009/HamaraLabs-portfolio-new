import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Buy.css';

function Buy() {
  return (
    <>
      <Header />
      <main className="buy-page">
        <section className="buy-hero">
          <h1>Buy Our Products</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        
        <section className="buy-content">
          <div className="product-card">
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.</p>
            <button className="buy-btn">Learn More</button>
          </div>
          
          <div className="product-card">
            <h2>Product 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.</p>
            <button className="buy-btn">Learn More</button>
          </div>
          
          <div className="product-card">
            <h2>Product 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.</p>
            <button className="buy-btn">Learn More</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Buy;
