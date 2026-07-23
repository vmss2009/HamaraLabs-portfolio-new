import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Buy.css';

function Buy() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'HamaraLabs Onboarding',
      amount: 100000,
      description: null
    }
  ];

  const handleBuyNow = (product) => {
    const merchantTransactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
    const currentUrl = window.location.origin;
    const redirectUrl = `${currentUrl}/payment/status?merchantTransactionId=${merchantTransactionId}&amount=${product.amount}`;
    
    navigate('/payment/checkout', {
      state: {
        amount: product.amount,
        merchantTransactionId,
        redirectUrl,
        productName: product.name
      }
    });
    // const url = `http://localhost:3000/payment/checkout?amount=${product.amount}&merchantTransactionId=${merchantTransactionId}&redirectUrl=${encodeURIComponent(redirectUrl)}&productName=${product.name}`;

    // window.location.href = url;
  };

  return (
    <>
      <Header />
      <main className="buy-page">
        <section className="buy-hero">
          <h1>Buy Our Products</h1>
          <p>Select a product to proceed with payment</p>
        </section>
        
        <section className="buy-content">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <div className="product-price">₹{product.amount.toLocaleString('en-IN')}</div>
              <button className="buy-btn" onClick={() => handleBuyNow(product)}>
                Buy Now
              </button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Buy;
