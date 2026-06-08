import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <svg 
                className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-white">
                SK technologies
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Innovating for a Smarter Tomorrow. We are a dynamic company committed to delivering cutting-edge solutions that seamlessly integrate hardware and software.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-blue-500 transition-colors">Shop Components</Link></li>
              <li><Link to="/categories" className="hover:text-blue-500 transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/cart" className="hover:text-blue-500 transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Our Expertise</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Circuit Design & PCB Development</li>
              <li>Test Equipment Development</li>
              <li>Embedded Systems & GUI</li>
              <li>Automation Excellence</li>
              <li>Smart Touch Modules</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-blue-500 text-lg shrink-0 mt-0.5" />
                <span># 11-146/1/A, Patwari Enclave,<br />Opp IDPL Colony, Balanagar,<br />Hyderabad, India 500037</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-blue-500 text-lg shrink-0" />
                <a href="mailto:sales@sktechnologies.co.in" className="hover:text-white transition-colors">
                  sales@sktechnologies.co.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-blue-500 text-lg shrink-0" />
                <span>+91 7032948938 <br/> +91 7032948939</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} SK Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;