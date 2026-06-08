import React from 'react';
import { Link } from 'react-router-dom'; // We added this!
import useCartStore from '../context/cartStore.js';

const Shop = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  // Mock data with proper IDs
  const mockProducts = [
    { id: 1, name: "STM32F401", category: "Microcontroller", desc: "ARM Cortex-M4 Microcontroller", price: 12.50, outOfStock: true, image: "https://picsum.photos/id/0/400/300" },
    { id: 2, name: "ESP32-WROOM-32", category: "Module", desc: "Wi-Fi + Bluetooth Module", price: 8.99, outOfStock: true, image: "https://picsum.photos/id/1/400/300" },
    { id: 3, name: "ATmega328P", category: "Microcontroller", desc: "8-bit AVR Microcontroller", price: 4.25, outOfStock: true, image: "https://picsum.photos/id/2/400/300" },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
            High Performance Components
          </h1>
          <p className="text-lg text-gray-500 font-medium tracking-widest mt-2 uppercase">
            Filtered for Precision
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Manufacturer</h3>
              <div className="space-y-3">
                {['STMicroelectronics', 'Espressif', 'Microchip', 'Texas Instruments'].map((brand) => (
                  <label key={brand} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700 text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Component Type</h3>
              <div className="space-y-3">
                {['Microcontroller', 'Module', 'IC', 'Sensor'].map((type) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Availability</h3>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-700 text-sm">In Stock Only</span>
              </label>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <span className="text-sm font-bold text-gray-500 tracking-wider">
                {mockProducts.length} ITEMS FOUND
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts.map((product) => (
                <div key={product.id} className="group relative flex flex-col bg-white">
                  
                  {/* Clickable Image -> Routes to Product Detail */}
                  <Link to={`/product/${product.id}`} className="relative aspect-4/3 overflow-hidden bg-gray-100 mb-4 border border-gray-200 block cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.outOfStock && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        Out of Stock
                      </div>
                    )}
                  </Link>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    {/* Clickable Title -> Routes to Product Detail */}
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-4">{product.desc}</p>
                  </div>
                  
                  {/* Price & Add Button (Stays functional without routing away) */}
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-gray-900 hover:bg-blue-600 text-white text-xs font-bold px-6 py-2 uppercase tracking-wider transition-colors duration-200 rounded-sm cursor-pointer"
                    >
                      Add
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;