import "./Navbar.css";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import logoImg from "../../assets/5.png"; 
import { Link } from "react-router-dom"; 
// 1. Import your new store
import useCartStore from "../../context/cartStore";

function Navbar() {
  // 2. Ask the store for the current cartItems array
  const cartItems = useCartStore((state) => state.cartItems);
  
  // Calculate total number of items (accounting for quantities)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        <img src={logoImg} alt="SK Technologies" />
        <span>SK Technologies</span>
      </Link>

      <ul className="nav-links">
        <li>Categories</li>
        <li>Products</li>
        <li>Solutions</li>
        <li>About Us</li>
      </ul>

      <div className="nav-icons">
        <FiSearch />
        <FiUser />
        
        {/* 3. Wrap the icon in a relative div to position the badge */}
        <Link to="/cart" className="cart-icon-wrapper" style={{ color: 'inherit', position: 'relative', display: 'flex' }}>
          <FiShoppingCart />
          
          {/* Only show the badge if there are items in the cart */}
          {totalItems > 0 && (
            <span className="cart-badge">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;