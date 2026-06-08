import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since this is a frontend mockup, we will just simulate a successful login
    // and redirect the user back to the home page!
    navigate('/');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6">
      
      <div className="max-w-md w-full bg-white rounded-3xl shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08)] p-8 sm:p-10 border border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4 hover:bg-blue-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </Link>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {isLogin ? 'Enter your details to access your account.' : 'Join us to get the best high-performance components.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Only show Name field if registering */}
          {!isLogin && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiUser className="text-slate-400 text-lg" />
              </div>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                className="w-full pl-11 pr-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
            </div>
          )}

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiMail className="text-slate-400 text-lg" />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              className="w-full pl-11 pr-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiLock className="text-slate-400 text-lg" />
            </div>
            <input 
              type="password" 
              placeholder="Password" 
              required 
              className="w-full pl-11 pr-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          {isLogin && (
            <div className="flex items-center justify-end">
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-slate-900 transition-colors">
                Forgot password?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] cursor-pointer"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Toggle State */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-blue-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;