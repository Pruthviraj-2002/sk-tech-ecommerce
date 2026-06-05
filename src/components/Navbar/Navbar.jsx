import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white tracking-tight">SK technologies
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-blue-400 transition-colors font-medium">Home</Link>
          <Link to="/shop" className="hover:text-blue-400 transition-colors font-medium">Shop</Link>
          <Link to="/categories" className="hover:text-blue-400 transition-colors font-medium">Categories</Link>
          <Link to="/resources" className="hover:text-blue-400 transition-colors font-medium">Resources</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors font-medium">About Us</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search components..."
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-10 py-2.5 w-72 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-400"
            />
            <span className="absolute left-4 top-3 text-gray-400">🔍</span>
          </div>

          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            👤
          </button>

          <button className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            🛒
            <span className="absolute -top-1 -right-1 bg-blue-500 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;