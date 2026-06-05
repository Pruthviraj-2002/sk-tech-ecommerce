import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path 
      ? "border-b border-gray-900 text-gray-900" 
      : "border-b border-transparent text-gray-600 hover:text-gray-900";
  };

  return (
    <nav className="w-full bg-[#f8f6f3] sticky top-0 z-50">
      {/* Soft warm background matching the Luxora vibe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif text-gray-900 tracking-widest uppercase">
              SK-Tech
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-xs font-medium uppercase tracking-widest pb-1 transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/shop" className={`text-xs font-medium uppercase tracking-widest pb-1 transition-colors ${isActive('/shop')}`}>
              Shop
            </Link>
            <Link to="/collections" className={`text-xs font-medium uppercase tracking-widest pb-1 transition-colors ${isActive('/collections')}`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs font-medium uppercase tracking-widest pb-1 transition-colors ${isActive('/about')}`}>
              About
            </Link>
          </div>

          <div className="flex items-center space-x-5">
            <button className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <Link to="/cart" className="text-gray-900 hover:text-gray-600 transition-colors flex items-center relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-2 text-[9px] font-medium bg-gray-900 text-white rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;