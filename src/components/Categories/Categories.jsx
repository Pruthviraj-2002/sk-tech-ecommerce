import React from 'react';

const Categories = () => {
  // A simple array of categories to map through
  const categoryList = [
    { name: "Microcontrollers", desc: "The brains for your hardware projects", icon: "🧠" },
    { name: "Sensors & Optics", desc: "Detect and measure the world around you", icon: "📡" },
    { name: "Power Modules", desc: "Batteries, regulators, and power management", icon: "⚡" },
    { name: "Connectivity", desc: "WiFi, Bluetooth, and RF modules", icon: "📶" },
    { name: "Passive Components", desc: "Resistors, capacitors, and inductors", icon: "🧲" },
    { name: "Motors & Actuators", desc: "Servos, steppers, and DC motors", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Explore Categories
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Browse our complete catalog of high-performance components. Everything you need to build, innovate, and accelerate your projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryList.map((cat, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-zinc-800/60 hover:border-blue-500/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Categories;