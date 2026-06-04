import { useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../context/cartStore";
import { FiCheckCircle } from "react-icons/fi";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useCartStore();
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate total for the button display
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 1.08;

  // Handle the fake payment submission
  const handlePayment = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setIsSuccess(true);
    clearCart(); // Empties the global Zustand store
  };

  // If the payment is successful, show the premium confirmation screen
  if (isSuccess) {
    return (
      <div className="success-container">
        <FiCheckCircle className="success-icon" />
        <h2>Payment Successful!</h2>
        <p>Your order for SK Technologies components is being processed.</p>
        <Link to="/" className="primary-btn mt-4">Return to Store</Link>
      </div>
    );
  }

  // If the cart is somehow empty and they navigated here, bounce them back
  if (cartItems.length === 0) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty.</h2>
        <Link to="/" className="primary-btn">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Secure Checkout</h1>
      
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handlePayment}>
          
          <div className="form-section">
            <h3>Shipping Information</h3>
            <div className="input-group">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="text" placeholder="Street Address" required className="full-width-input" />
            <div className="input-group">
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Zip Code" required />
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Details</h3>
            <input type="text" placeholder="Card Number" required className="full-width-input" />
            <div className="input-group">
              <input type="text" placeholder="MM/YY" required />
              <input type="text" placeholder="CVC" required />
            </div>
          </div>

          <button type="submit" className="pay-btn">
            Pay ${total.toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;