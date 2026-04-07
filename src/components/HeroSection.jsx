import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      {/* Fallback image if dynamic one doesn't load */}
      <img src="./jewelry_bg_demo.png" alt="Jewelry Background" className="hero-bg-image" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text-container"
        >
          <span className="hero-subtitle">Careers at Chemmanur</span>
          <h1 className="heading-font hero-title">
            Get closer to <span className="gold-gradient-text">Gold</span>
          </h1>
          <p className="hero-description">
            Are you fascinated by the yellow metal? Have a natural flair with gold? Work with the pioneer in the industry - Chemmanur Jewellers. We have a strong legacy and knowledge in the jewellery industry and we carry goodwill worth its weight in gold.
          </p>
          <p className="hero-description-secondary">
            We have built this organization with the strong support of the people who have stood by us for years together. Our people have grown with us and that makes us a preferred employer in this industry.
          </p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#openings" className="btn-primary">
              View Openings <ChevronRight size={18} />
            </a>
            <a href="#about" className="btn-outline">
              Discover Our Legacy
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
