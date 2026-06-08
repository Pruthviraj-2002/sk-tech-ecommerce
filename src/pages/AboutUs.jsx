import React from 'react';

const AboutUs = () => {
  return (
    <div className="pt-28 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Empowering <span className="text-blue-600">Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SK Technologies is your trusted partner in electronic components. We source the highest quality parts for engineers, makers, and industry professionals to bring their ideas to life.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
            <p className="text-gray-600">Every component we stock undergoes strict quality control to ensure reliability in your mission-critical applications.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
              🚀
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Shipping</h3>
            <p className="text-gray-600">We understand that time is money. Our optimized supply chain ensures your parts arrive exactly when you need them.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
              💡
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">Our team consists of real engineers ready to help you navigate complex technical specifications and product selections.</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-600 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To bridge the gap between imagination and creation by providing accessible, top-tier electronic hardware to creators across the globe. Whether you are prototyping in a garage or scaling an enterprise, we are here to supply your success.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;