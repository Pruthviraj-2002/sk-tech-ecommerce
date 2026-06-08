import { useParams, Link } from "react-router-dom";
import useCartStore from "../context/cartStore.js"; 
import { FiArrowLeft, FiCheck } from "react-icons/fi";

function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // We are putting the mock data directly in here so it doesn't rely on external files breaking!
  const mockProducts = [
    { id: 1, name: "STM32F401", category: "Microcontroller", desc: "ARM Cortex-M4 Microcontroller", price: 12.50, outOfStock: true, image: "https://picsum.photos/id/0/400/300" },
    { id: 2, name: "ESP32-WROOM-32", category: "Module", desc: "Wi-Fi + Bluetooth Module", price: 8.99, outOfStock: true, image: "https://picsum.photos/id/1/400/300" },
    { id: 3, name: "ATmega328P", category: "Microcontroller", desc: "8-bit AVR Microcontroller", price: 4.25, outOfStock: true, image: "https://picsum.photos/id/2/400/300" },
  ];

  // Find the product that matches the URL ID
  const product = mockProducts.find((p) => p.id === parseInt(id));

  // If the product doesn't exist
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center pt-40 pb-20 px-6 text-center min-h-[80vh]">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Component Not Found</h2>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-900 transition-colors"
        >
          Return to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-[80vh]">
      
      {/* Back Link */}
      <Link 
        to="/shop" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium mb-8"
      >
        <FiArrowLeft /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-4">
        
        {/* Left: Image Area */}
        <div className="w-full">
          <div className="w-full h-100 lg:h-150 rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative group">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {product.outOfStock && (
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-md">
                Out of Stock
              </div>
            )}
          </div>
        </div>

        {/* Right: Product Details & Buying Actions */}
        <div className="flex flex-col pt-0 lg:pt-5">
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
            {product.category}
          </span>
          
          <h1 className="text-4xl lg:text-6xl text-slate-900 leading-tight mb-5 font-extrabold tracking-tight">
            {product.name}
          </h1>
          
          <p className="text-4xl font-bold text-slate-900 mb-8 pb-8 border-b border-slate-200">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-lg leading-relaxed text-slate-500 mb-8">
            {product.desc} This is a premium component sourced directly from our verified manufacturers to ensure maximum reliability in your projects.
          </p>

          <ul className="flex flex-col gap-4 mb-10">
            <li className="flex items-center gap-3 text-slate-900 font-medium text-lg">
              <FiCheck className="text-emerald-500 text-xl shrink-0" /> 
              In stock and ready to ship
            </li>
            <li className="flex items-center gap-3 text-slate-900 font-medium text-lg">
              <FiCheck className="text-emerald-500 text-xl shrink-0" /> 
              Lifetime technical support
            </li>
            <li className="flex items-center gap-3 text-slate-900 font-medium text-lg">
              <FiCheck className="text-emerald-500 text-xl shrink-0" /> 
              Certified genuine component
            </li>
          </ul>

          <div className="flex gap-5">
            <button 
              className="flex-1 bg-slate-900 text-white py-5 px-8 rounded-2xl text-lg font-bold transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(15,23,42,0.5)] hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.5)] cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;