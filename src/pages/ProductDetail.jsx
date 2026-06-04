import { useParams, Link } from "react-router-dom";
import { productData } from "../components/Products/Products"; // Importing our mock database
import useCartStore from "../context/cartStore";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import "./ProductDetail.css";

function ProductDetail() {
  // 1. Grab the ID from the URL
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // 2. Find the exact product that matches this ID
  // (We use parseInt because the URL ID is technically a string)
  const product = productData.find((p) => p.id === parseInt(id));

  // If someone types a random ID in the URL that doesn't exist
  if (!product) {
    return (
      <div className="not-found-container">
        <h2>Component Not Found</h2>
        <Link to="/" className="back-btn">Return to Store</Link>
      </div>
    );
  }

  return (
    <div className="pdp-container">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Back to Products
      </Link>

      <div className="pdp-layout">
        {/* Left: Huge Premium Image Area */}
        <div className="pdp-image-section">
          <div className="main-image-placeholder">
            <span>{product.category} Prototype</span>
          </div>
        </div>

        {/* Right: Product Details & Buying Actions */}
        <div className="pdp-info-section">
          <span className="pdp-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="pdp-price">${product.price.toFixed(2)}</p>
          
          <p className="pdp-description">{product.desc}</p>

          <ul className="pdp-features">
            <li><FiCheck /> In stock and ready to ship</li>
            <li><FiCheck /> Lifetime technical support</li>
            <li><FiCheck /> Certified genuine component</li>
          </ul>

          <div className="pdp-actions">
            <button 
              className="pdp-add-btn"
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