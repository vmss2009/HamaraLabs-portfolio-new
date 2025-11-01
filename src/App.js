import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import HomeSchoolers from './pages/HomeSchoolers';
import Students from './pages/Students';
import ATLs from './pages/ATLs';
import Checkout from './pages/Checkout';
import PaymentStatus from './pages/PaymentStatus';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/homeschoolers" element={<HomeSchoolers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/atls" element={<ATLs />} />
          <Route path="/payment/checkout" element={<Checkout />} />
          <Route path="/payment/status" element={<PaymentStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
