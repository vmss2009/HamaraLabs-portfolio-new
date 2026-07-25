import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Buy from './pages/buy/Buy';
import Checkout from './pages/payments/checkout/Checkout';
import PaymentStatus from './pages/payments/PaymentStatus';
import Terms from './pages/legal-agreements/terms/Terms';
import Privacy from './pages/legal-agreements/privacy-policy/Privacy';
import Refund from './pages/legal-agreements/refund-policy/Refund';
import Blog from './pages/blog/Blog';
import BlogArticle from './pages/blog/BlogArticle';
import NotFound from './pages/not-found/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/payment/checkout" element={<Checkout />} />
          <Route path="/payment/status" element={<PaymentStatus />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
