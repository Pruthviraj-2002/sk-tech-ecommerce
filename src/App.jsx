import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Notice the added Footer import
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'; 
import Categories from './components/Categories/Categories.jsx';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        
        {/* The flex-grow class pushes the footer to the bottom even on short pages */}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;