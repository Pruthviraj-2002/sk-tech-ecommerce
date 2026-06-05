import { Link } from 'react-router-dom';
import bgImage from '../../assets/bg.png';
const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#0a1428] overflow-hidden">
      
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Circuit Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80"></div>
        
        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-size-[50px_50px] opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen text-white">
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          
        

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter mb-6">
            Your One-Stop Shop for<br />
            <span className="text-[#60a5fa]">Electronic Components</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            High-quality components for engineers, makers,<br />
            and innovators. Reliable. Affordable. Always.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center bg-[#3b82f6] hover:bg-blue-600 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/30"
            >
              Shop Now →
            </Link>
            <Link 
              to="/categories" 
              className="inline-flex items-center justify-center border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all px-8 py-4 rounded-2xl font-semibold text-lg"
            >
              Explore Categories →
            </Link>
          </div>

          
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-16 mb-12">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-3xl">📦</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Wide Selection</h4>
                <p className="text-sm text-gray-600">10,000+ quality components from top brands</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-3xl">🛡️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Quality You Trust</h4>
                <p className="text-sm text-gray-600">100% genuine products and verified suppliers</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-3xl">🚚</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Fast & Reliable</h4>
                <p className="text-sm text-gray-600">Quick shipping and real-time tracking</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-3xl">🛠️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Support That Helps</h4>
                <p className="text-sm text-gray-600">Expert support from real engineers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;