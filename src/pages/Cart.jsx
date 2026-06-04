import { Link } from "react-router-dom";
import useCartStore from "../context/cartStore";
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();

  // Calculate the financial totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // Example 8% tax rate
  const total = subtotal + tax;

  // Render an empty state if nothing is in the cart
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-container">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any components yet.</p>
        <Link to="/" className="continue-btn">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Continue Shopping
        </Link>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">
        {/* LEFT COLUMN: The Items List */}
        <div className="cart-items-section">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-image-placeholder">
                {item.category.substring(0, 3).toUpperCase()}
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-category">{item.category}</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}><FiMinus /></button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}><FiPlus /></button>
              </div>

              <div className="item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: The Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Estimated Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Replace your current button with this: */}
<Link to="/checkout" style={{ width: '100%', display: 'block' }}>
  <button className="checkout-btn">Proceed to Checkout</button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;