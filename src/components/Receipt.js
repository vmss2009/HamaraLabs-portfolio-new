import React from "react";
import HamaralabsImage from "../assets/logo.png";

const Receipt = React.forwardRef(({ receiptData }, ref) => {
  return (
    <div className="receipt-container" ref={ref}>
      <style>{`
        .receipt-container {
          padding: 40px;
          background: white;
          font-family: 'Arial', sans-serif;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .receipt-container .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #333;
          padding-bottom: 20px;
        }
        
        .receipt-container .logo {
          max-width: 180px;
          margin-bottom: 15px;
        }
        
        .receipt-container h1 {
          margin: 10px 0;
          color: #333;
          font-size: 24px;
        }
        
        .receipt-container h2 {
          margin: 20px 0 10px;
          color: #333;
          font-size: 18px;
        }
        
        .receipt-container p {
          margin: 8px 0;
          color: #555;
          line-height: 1.6;
        }
        
        .receipt-container table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        
        .receipt-container th,
        .receipt-container td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        
        .receipt-container th {
          background-color: #f8f9fa;
          font-weight: bold;
          color: #333;
        }
        
        .receipt-container .items-section {
          margin: 30px 0;
        }
        
        .receipt-container .total-section {
          margin: 20px 0;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 5px;
        }
        
        .receipt-container .total-section p {
          font-size: 18px;
          color: #333;
        }
        
        .receipt-container .notes-section {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
        }
      `}</style>
      <div className="header">
        <img src={HamaralabsImage} alt="Logo" className="logo" />
        <h1>Payment Receipt</h1>
        <p>SketchEA IT Consultants Pvt Ltd.</p>
        <p>#38-37-63, Bhaskar Gardens, Marripalem, Visakhapatnam</p>
        <p>Andhra Pradesh, PIN Code - 530018</p>
      </div>
      <div>
        <p>
          <strong>Date:</strong> {receiptData.date}
        </p>
        <p>
          <strong>Merchant Transaction Id:</strong> {receiptData.merchantTransactionId}
        </p>
        {receiptData.transactionId && (
          <p>
            <strong>Transaction Id:</strong> {receiptData.transactionId}
          </p>
        )}
        <p>
          <strong>Paid By:</strong> {receiptData.paidBy}
        </p>
        {receiptData.paymentMethod && (
          <p>
            <strong>Payment Method:</strong> {receiptData.paymentMethod}
          </p>
        )}
      </div>
      <div className="items-section">
        <h2>Items</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {receiptData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-section">
        <p>
          <strong>Total Amount:</strong> ₹{receiptData.amount}
        </p>
      </div>
      <div className="notes-section">
        <p>
          <strong>Notes:</strong> {receiptData.notes}
        </p>
      </div>
    </div>
  );
});

export default Receipt;
