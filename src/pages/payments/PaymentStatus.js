import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { useReactToPrint } from 'react-to-print';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Receipt from '../../components/Receipt';
import './PaymentStatus.css';

function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);
  const receiptRef = useRef(null);

  const merchantTransactionId = searchParams.get('merchantTransactionId');
  const merchantId = '{merchantId}';

  const handlePrint = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: `Receipt-${merchantTransactionId}`,
  });

  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (!merchantTransactionId) {
        setError('Invalid transaction ID');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          'https://us-central1-hamaralabs-prod.cloudfunctions.net/paymentIntegration/getStatus',
          {
            merchantTransactionId: merchantTransactionId,
            merchantId: merchantId
          }
        );

        console.log('Payment Status Response:', response.data);
        setPaymentStatus(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error checking payment status:', err);
        setError('Failed to verify payment status');
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, [merchantTransactionId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="payment-status-container">
          <div className="payment-status-card">
            <Bars
              height="80"
              width="80"
              radius="9"
              color="#5f41c9"
              ariaLabel="loading"
            />
            <h2>Verifying Payment...</h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="payment-status-container">
          <div className="payment-status-card error">
            <div className="status-icon error-icon">✕</div>
            <h2>Error</h2>
            <p>{error}</p>
            <button className="status-btn primary" onClick={() => navigate('/buy')}>
              Back to Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Check if payment was successful based on the response structure
  const isSuccess = paymentStatus?.data?.code === 'PAYMENT_SUCCESS' || 
                    paymentStatus?.data?.data?.state === 'COMPLETED';
  
  const isNotFound = paymentStatus?.data?.code === 'TRANSACTION_NOT_FOUND' ||
                     paymentStatus?.data?.message?.includes('TRANSACTION_NOT_FOUND');
  
  const transactionId = paymentStatus?.data?.data?.transactionId || 'N/A';
  const amount = searchParams.get('amount') || paymentStatus?.data?.data?.amount || '0';

  // Prepare receipt data for successful payments
  const receiptData = isSuccess ? {
    date: new Date().toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    merchantTransactionId: merchantTransactionId,
    transactionId: transactionId !== 'N/A' ? transactionId : null,
    paidBy: paymentStatus?.data?.data?.paymentInstrument?.accountHolderName || 'Customer',
    paymentMethod: paymentStatus?.data?.data?.paymentInstrument?.type || null,
    items: [
      {
        description: 'Product Purchase',
        quantity: 1,
        price: amount,
        total: amount
      }
    ],
    amount: amount,
    notes: 'Thank you for your purchase! This is your official payment receipt.'
  } : null;

  // Handle transaction not found case
  if (isNotFound) {
    return (
      <>
        <Header />
        <div className="payment-status-container">
          <div className="payment-status-card pending">
            <div className="status-icon pending-icon">⏳</div>
            <h2>Transaction Not Found</h2>
            <div className="transaction-details">
              <p>
                <strong>Merchant Transaction ID:</strong>
                <br />
                <span className="transaction-id">{merchantTransactionId}</span>
              </p>
            </div>
            <p className="status-message">
              The transaction could not be found in the system. Please check back in a few moments or contact support if the issue persists.
            </p>
            <div className="status-actions">
              <button className="status-btn primary" onClick={() => navigate('/')}>
                Go to Home
              </button>
              <button className="status-btn secondary" onClick={() => window.location.reload()}>
                Refresh Status
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="payment-status-container">
        <div className={`payment-status-card ${isSuccess ? 'success' : 'failed'}`}>
          <div className={`status-icon ${isSuccess ? 'success-icon' : 'failed-icon'}`}>
            {isSuccess ? '✓' : '✕'}
          </div>
          <h2>{isSuccess ? 'Payment Successful!' : 'Payment Failed'}</h2>
          <div className="transaction-details">
            <p>
              <strong>Transaction ID:</strong>
              <br />
              <span className="transaction-id">{transactionId}</span>
            </p>
          </div>
          <p className="status-message">
            {isSuccess
              ? 'Thank you for your purchase! Your payment has been processed successfully.'
              : 'Unfortunately, your payment could not be processed. Please try again.'}
          </p>
          <div className="status-actions">
            <button className="status-btn primary" onClick={() => navigate('/')}>
              Go to Home
            </button>
            {isSuccess && (
              <button className="status-btn secondary" onClick={handlePrint}>
                Download Receipt
              </button>
            )}
            {!isSuccess && (
              <button className="status-btn secondary" onClick={() => navigate('/buy')}>
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
      {isSuccess && (
        <div style={{ display: 'none' }}>
          <Receipt ref={receiptRef} receiptData={receiptData} />
        </div>
      )}
      <Footer />
    </>
  );
}

export default PaymentStatus;
