import "./Products.css";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 1. Import Framer Motion

export const productData = [
  { id: 1, name: "Quantum Microcontroller", price: 45.00, category: "Processors", desc: "A high-performance microcontroller built for complex quantum computing tasks and rapid data processing." },
  { id: 2, name: "Precision Servo Motor", price: 22.50, category: "Robotics", desc: "Industrial-grade servo motor with ultra-precise angular positioning, perfect for robotic arms." },
  { id: 3, name: "Industrial Logic Board", price: 120.00, category: "Circuitry", desc: "Heavy-duty logic board designed to withstand extreme temperatures and vibrations in factory environments." },
  { id: 4, name: "Nano Thermal Sensor", price: 18.99, category: "Sensors", desc: "Highly sensitive thermal sensor capable of detecting minute temperature changes in real-time." },
];

// 2. Define the animation rules for the grid container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // This creates the 1-by-1 staggered effect
    }
  }
};

// 3. Define the animation rules for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function Products() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="products-section">
      <div className="products-header">
        <span className="section-tag">TOP RATED</span>
        <h2>Featured <span>Components</span></h2>
        <p>Engineered for performance and reliability.</p>
      </div>

      {/* 4. Apply the container variants to the grid */}
      <motion.div 
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // This triggers the animation only when the user scrolls down to it!
        viewport={{ once: true, amount: 0.2 }} // Ensures it only plays once
      >
        {productData.map((product) => (
          /* 5. Apply the card variants to each item */
          <motion.div className="product-card" key={product.id} variants={cardVariants}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="product-image-placeholder">
                <span>{product.category}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            
            <button 
              className="add-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Products;