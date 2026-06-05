import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f6f3] text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
        
        {/* The one and only Navbar */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;