import { Link } from 'react-router-dom';
import bgImage from '../../assets/bg.png'; 

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Top Section: Background & Text Wrapper */}
      <div className="relative w-full pt-40 pb-48 flex flex-col items-center">
        
        {/* The Image & The Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Electronic Components Background" 
            className="w-full h-full object-cover"
          />
          {/* This simple black overlay is the secret to god-tier contrast on dark images */}
          <div className="absolute inset-0 bg-[#060b14]/70"></div>
        </div>

        {/* Center Hero Content (Now all text is forced to white/light gray to contrast the dark background) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
              Build. Innovate. Accelerate.
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            Your One-Stop Shop for <br />
            <span className="text-blue-400">Electronic Components</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            High-quality components for engineers, makers, and innovators. Reliable. Affordable. Always.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <Link 
              to="/shop" 
              className="inline-flex justify-center items-center bg-blue-600 text-white font-medium text-sm px-8 py-3 rounded hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
            >
              Shop Now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link 
              to="/categories" 
              className="inline-flex justify-center items-center bg-white/10 text-white border border-white/20 backdrop-blur-sm font-medium text-sm px-8 py-3 rounded hover:bg-white/20 transition-colors"
            >
              Explore Categories <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Card */}
      <div className="relative z-20 px-4 w-full -mt-24 mb-12">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            
            <div className="flex items-center space-x-4 pt-4 sm:pt-0 pl-0">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Wide Selection</h4>
                <p className="text-[11px] text-gray-500 leading-tight">10,000+ quality components from top brands</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4 sm:pt-0 pl-0 sm:pl-8">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Quality You Trust</h4>
                <p className="text-[11px] text-gray-500 leading-tight">100% genuine products and verified suppliers</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4 sm:pt-0 pl-0 lg:pl-8">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Fast & Reliable</h4>
                <p className="text-[11px] text-gray-500 leading-tight">Quick shipping and real-time tracking</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4 sm:pt-0 pl-0 sm:pl-8">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Support That Helps</h4>
                <p className="text-[11px] text-gray-500 leading-tight">Expert support from real engineers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;