import { Link } from "react-router-dom";
// Notice the .js extension here!
import useCartStore from "../context/cartStore.js"; 
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";

function Cart() {
  // Bulletproof Zustand state selection
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // --- LOCALIZATION & FORMATTING ---
  // Formats numbers to Indian Rupees with proper comma placement (e.g., ₹1,00,000.00)
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // --- E-COMMERCE MATH ---
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Standard Indian GST for electronics/components is usually 18%
  const GST_RATE = 0.18; 
  const estimatedGST = subtotal * GST_RATE;

  // Delivery Logic: Free shipping over ₹499, otherwise ₹50
  const FREE_SHIPPING_THRESHOLD = 499;
  const deliveryFee = subtotal === 0 ? 0 : (subtotal > FREE_SHIPPING_THRESHOLD ? 0 : 50);

  const total = subtotal + estimatedGST + deliveryFee;

  // EMPTY STATE
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Your Cart is Empty</h2>
        <p className="text-lg text-slate-500 mb-8">Looks like you haven't added any components yet.</p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-colors duration-300"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  // CART LAYOUT
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[70vh]">
      
      {/* Header */}
      <div className="mb-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 font-semibold mb-4 transition-colors hover:text-slate-900"
        >
          <FiArrowLeft /> Continue Shopping
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Shopping Cart
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
        
        {/* LEFT COLUMN: The Items List */}
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <div 
              className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-slate-200 gap-5" 
              key={item.id}
            >
              {/* Image Placeholder */}
              <div className="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400 shrink-0">
                {item.category ? item.category.substring(0, 3).toUpperCase() : 'CMP'}
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.category}</p>
              </div>

              {/* Quantity & Price Wrapper for Mobile alignment */}
              <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end gap-6 mt-4 sm:mt-0">
                {/* Quantity Controls */}
                <div className="flex items-center gap-4 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                  <button 
                    className="text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-center cursor-pointer"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <FiMinus />
                  </button>
                  <span className="font-semibold min-w-5 text-center text-slate-900">
                    {item.quantity}
                  </span>
                  <button 
                    className="text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-center cursor-pointer"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* Price */}
                <div className="font-bold text-lg text-slate-900 min-w-28 text-right">
                  {formatINR(item.price * item.quantity)}
                </div>

                {/* Remove Button */}
                <button 
                  className="text-red-500 hover:scale-110 transition-transform p-2 flex items-center justify-center cursor-pointer" 
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: The Order Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08)] border border-slate-100 lg:sticky lg:top-32">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
          
          <div className="flex justify-between mb-4 text-slate-500 font-medium">
            <span>Subtotal</span>
            <span className="text-slate-900">{formatINR(subtotal)}</span>
          </div>
          
          <div className="flex justify-between mb-4 text-slate-500 font-medium">
            <span>Estimated GST (18%)</span>
            <span className="text-slate-900">{formatINR(estimatedGST)}</span>
          </div>

          <div className="flex justify-between mb-4 text-slate-500 font-medium">
            <span>Delivery Fee</span>
            <span className={deliveryFee === 0 ? "text-green-600 font-bold" : "text-slate-900"}>
              {deliveryFee === 0 ? "Free" : formatINR(deliveryFee)}
            </span>
          </div>
          
          {/* Progress bar to free shipping if they haven't hit it */}
          {deliveryFee > 0 && (
            <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 mb-2">
                Add <span className="font-bold text-slate-900">{formatINR(FREE_SHIPPING_THRESHOLD - subtotal)}</span> more to your cart for <span className="font-bold text-green-600">FREE delivery</span>!
              </p>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(subtotal / FREE_SHIPPING_THRESHOLD) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-6 pt-5 border-t border-dashed border-slate-300 text-slate-900 text-xl font-extrabold">
            <span>Total</span>
            <span>{formatINR(total)}</span>
          </div>

          <Link 
            to="/checkout" 
            className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl text-base font-bold mt-8 transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)]"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;