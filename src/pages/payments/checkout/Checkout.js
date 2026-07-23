import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { Bars } from "react-loader-spinner";

function Checkout() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const { amount, merchantTransactionId, redirectUrl, productName } = location.state || {};

    const handleCheckout = async () => {
        if (amount !== undefined && merchantTransactionId !== undefined && redirectUrl !== undefined) {
            setLoading(true);
            const merchantUserId = `USER${Date.now()}`;
            
            await axios.post("https://us-central1-hamaralabs-prod.cloudfunctions.net/paymentIntegration/initiateTransaction", {
                merchantTransactionId: merchantTransactionId,
                merchantUserId: merchantUserId,    
                amount: parseInt(amount),
                redirectUrl: redirectUrl
            })
            .then((res) => {
                console.log(res);
                setLoading(false);
                window.location.href = res.data.url.data.instrumentResponse.redirectInfo.url;
            })
            .catch((error) => {
                console.error('Payment error:', error);
                setLoading(false);
                alert('Payment initiation failed. Please try again.');
            });
        }
    };

    if (loading) {
        return (
            <div style={{height: "85%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {<Bars
                    height="80"
                    width="80"
                    radius="9"
                    color="black"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />}
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <div style={{
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '400px',
                fontSize: '18px',
            }}>
                <h2 style={{ marginBottom: '30px', color: '#333' }}>Checkout</h2>
                {productName && (
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <strong>{productName}</strong>
                    </div>
                )}
                <div style={{ marginBottom: '20px' }}>
                    Amount: <strong>₹ {amount?.toLocaleString('en-IN')}</strong>
                </div>
                <button
                onClick={handleCheckout}
                style={{
                    padding: '15px 30px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                >
                Proceed to Payment
                </button>
            </div>
        </div>
    );
}

export default Checkout;