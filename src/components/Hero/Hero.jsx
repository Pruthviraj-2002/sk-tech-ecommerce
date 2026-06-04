import "./Hero.css";
import heroImg from "../../assets/1.png";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Hero() {
  return (
    <section className="hero">
      {/* 2. Wrap the left content in a motion.div */}
      <motion.div 
        className="hero-left"
        initial={{ opacity: 0, x: -50 }} // Starts invisible and slightly to the left
        animate={{ opacity: 1, x: 0 }}   // Animates to full visibility and original position
        transition={{ duration: 0.8, ease: "easeOut" }} // Controls the speed and smoothness
      >
        <span className="hero-tag">TRUSTED BY INNOVATORS WORLDWIDE</span>
        <h1>
          Powering Ideas.
          <br />
          Building <span className="gradient-text">Tomorrow.</span>
        </h1>
        <p>
          High-quality electronic components, advanced tools, and engineering solutions
          for every innovation.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Explore Products</button>
          <button className="secondary-btn">View Solutions</button>
        </div>
      </motion.div>

      <div className="hero-right">
        <div className="chip-glow"></div>
        
        {/* 3. Add a subtle fade-in to the main image */}
        <motion.img 
          src={heroImg} 
          alt="Advanced Circuitry" 
          className="main-hero-img"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* 4. Animate the floating cards with a delay so they pop in last */}
        <motion.div 
          className="floating-card card-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>50K+</h3>
          <p>Products Available</p>
        </motion.div>

        <motion.div 
          className="floating-card card-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>99%</h3>
          <p>Customer Satisfaction</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;