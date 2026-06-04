import "./Features.css";
import { FiTag, FiTruck, FiShield } from "react-icons/fi";

function Features() {
  return (
    <div className="features">
      {/* Feature 1 */}
      <div className="feature">
        <FiTag className="feature-icon" />
        <div className="feature-text">
          <h3>Quality Components</h3>
          <p>Genuine & reliable</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="feature">
        <FiTruck className="feature-icon" />
        <div className="feature-text">
          <h3>Fast Delivery</h3>
          <p>On-time, every time</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="feature">
        <FiShield className="feature-icon" />
        <div className="feature-text">
          <h3>Secure Payments</h3>
          <p>100% safe & secure</p>
        </div>
      </div>
    </div>
  );
}

export default Features;