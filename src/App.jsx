import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      {/* Changed bg-[#f8f6f3] to bg-white for that clean tech look */}
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
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