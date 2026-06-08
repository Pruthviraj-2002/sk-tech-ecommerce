import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCartStore from '../../context/cartStore.js';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Connect to Zustand store
  const cartItems = useCartStore((state) => state.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-linear-to-b from-black/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center space-x-2 cursor-pointer group">
            <svg 
              className={`w-8 h-8 transition-colors ${isScrolled ? 'text-blue-600' : 'text-blue-400 group-hover:text-white'}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              SK technologies
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className={`relative text-sm font-medium group transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
              Home
              {isActive('/') && (
                <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 rounded-full ${isScrolled ? 'bg-blue-600' : 'bg-blue-400'}`}></span>
              )}
            </Link>
            
            <Link to="/shop" className={`relative text-sm font-medium group transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
              Shop
              {isActive('/shop') && (
                <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 rounded-full ${isScrolled ? 'bg-blue-600' : 'bg-blue-400'}`}></span>
              )}
            </Link>
            
            <Link to="/categories" className={`relative flex items-center cursor-pointer group space-x-1 transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
              <span className="text-sm font-medium">Categories</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              {isActive('/categories') && (
                <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 rounded-full ${isScrolled ? 'bg-blue-600' : 'bg-blue-400'}`}></span>
              )}
            </Link>
            
            <Link to="/about" className={`relative text-sm font-medium group transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
              About Us
              {isActive('/about') && (
                <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 rounded-full ${isScrolled ? 'bg-blue-600' : 'bg-blue-400'}`}></span>
              )}
            </Link>
          </div>

          {/* Right Actions & Cart */}
          <div className="flex items-center space-x-5">
            <div className="hidden md:block relative">
              <input 
                type="text" 
                placeholder="Search" 
                className={`w-56 border rounded-lg py-1.5 pl-3 pr-8 text-sm focus:outline-none transition-colors ${
                  isScrolled 
                    ? 'bg-white border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900' 
                    : 'bg-black/30 border-white/20 text-white placeholder-gray-300 focus:bg-black/50 focus:border-blue-400'
                }`}
              />
              <svg className={`w-4 h-4 absolute right-3 top-2 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Link to="/login" className={`flex items-center transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </Link>

            <Link to="/cart" className={`flex items-center relative transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Dynamic Badge */}
              <span className="absolute -top-1.5 -right-2 text-[9px] font-bold bg-blue-600 text-white rounded-full h-4 w-4 flex items-center justify-center border-2 border-transparent box-content">
                {cartCount}
              </span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;