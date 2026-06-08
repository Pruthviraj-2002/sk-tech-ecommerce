import { useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../context/cartStore.js"; 
import { FiCheckCircle } from "react-icons/fi";

function Checkout() {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate total for the button display (including 8% tax)
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 1.08;

  // Handle the fake payment submission
  const handlePayment = (e) => {
    e.preventDefault(); 
    setIsSuccess(true);
    clearCart(); // This calls Zustand to instantly empty the global cart!
  };

  // SUCCESS SCREEN
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 pt-32 pb-20 text-center">
        <FiCheckCircle className="text-emerald-500 text-7xl md:text-8xl mb-6" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Payment Successful!</h2>
        <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
          Your order for SK Technologies components is being processed.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-colors duration-300"
        >
          Return to Store
        </Link>
      </div>
    );
  }

  // EMPTY CART FALLBACK (Prevents users from manually navigating to /checkout with an empty cart)
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 pt-32 pb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your cart is empty.</h2>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-colors duration-300"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  // CHECKOUT FORM
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
        Secure Checkout
      </h1>
      
      <div>
        <form 
          className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(15,23,42,0.08)]" 
          onSubmit={handlePayment}
        >
          
          {/* Shipping Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Shipping Information
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <input 
                type="text" 
                placeholder="First Name" 
                required 
                className="w-full px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                required 
                className="w-full px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
            </div>
            
            <input 
              type="text" 
              placeholder="Street Address" 
              required 
              className="w-full mb-5 px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <input 
                type="text" 
                placeholder="City" 
                required 
                className="w-full px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
              <input 
                type="text" 
                placeholder="Zip Code" 
                required 
                className="w-full px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
            </div>
          </div>

          {/* Payment Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Payment Details
            </h3>
            
            <input 
              type="text" 
              placeholder="Card Number" 
              required 
              className="w-full mb-5 px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <input 
                type="text" 
                placeholder="MM/YY" 
                required 
                className="w-full px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
              <input 
                type="text" 
                placeholder="CVC" 
                required 
                className="w-full px-5 py-4 border border-slate-200 rounded-xl text-base text-slate-900 bg-slate-50 transition-all duration-300 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-bold mt-2 transition-all duration-300 hover:bg-emerald-500 hover:-translate-y-1 hover:shadow-[0_15px_25px_-10px_rgba(16,185,129,0.4)] cursor-pointer"
          >
            Pay ${total.toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;