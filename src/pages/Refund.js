import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Refund.css';

function Refund() {
  return (
    <>
      <Header />
      <main className="refund-page">
        <div className="refund-container">
          <h1>Refund Policy</h1>
          
          <div className="refund-content">
            <p>
              Thanks for shopping at Our Site.
            </p>
            <p>
              If you are not entirely satisfied with your purchase, we are here to help you.
            </p>

            <h2>Refunds</h2>
            <p>
              We will refund your amount if you communicate to us by sending email to <a href="mailto:contact@hamaralabs.com">contact@hamaralabs.com</a>
            </p>
            <p className="note">
              <strong>Note:</strong> Refund will be provided after deducting payment gateway charges.
            </p>

            <h2>Late or missing refunds (if applicable)</h2>
            <p>
              If you haven't received a refund yet, we request you to first check your bank account again.
            </p>
            <p>
              Then contact your credit card company, it may take some time before your refund is officially posted.
            </p>
            <p>
              Next, contact your bank. There is often some processing time before a refund is posted.
            </p>
            <p>
              If you've done all of this and you still have not received your refund yet, please contact us at <a href="mailto:contact@hamaralabs.com">contact@hamaralabs.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Refund;
