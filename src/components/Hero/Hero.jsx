import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#f8f6f3] overflow-hidden">
      {/* Matching the exact warm beige background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[85vh] py-16 lg:py-0">
          
          <div className="w-full lg:w-1/2 pr-0 lg:pr-16 text-left z-10 flex flex-col justify-center h-full pt-10">
            
            <span className="text-xs font-medium text-[#9a7b66] uppercase tracking-widest mb-6 block">
              New Arrivals
            </span>
            
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.05] mb-6">
              Elevate Your <br className="hidden md:block" /> Engineering
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-md font-light leading-relaxed">
              Discover high-performance architectural components crafted with precision, designed for the modern developer.
            </p>
            
            <div className="flex items-center space-x-8 mb-20">
              <Link 
                to="/shop" 
                className="inline-block bg-gray-900 text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-black transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                to="/shop" 
                className="inline-flex items-center text-gray-900 text-xs tracking-widest uppercase pb-1 border-b border-gray-400 hover:border-gray-900 transition-colors"
              >
                Explore Collection
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 border-t border-gray-200/60 pt-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Free Shipping</h4>
                  <p className="text-[10px] text-gray-500">On all orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Secure Payment</h4>
                  <p className="text-[10px] text-gray-500">100% secure checkout</p>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-1/2 h-125 lg:h-[85vh] mt-12 lg:mt-0 relative">
            <img 
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Hardware Components" 
              className="object-cover w-full h-full lg:absolute lg:top-0 lg:right-0 lg:bottom-0 rounded-tl-[4rem] lg:rounded-none lg:rounded-tl-[8rem] shadow-2xl lg:shadow-none"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;