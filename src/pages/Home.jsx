import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Home Hero */}
      <section className="home-hero">
        <div className="hero-bg-overlay"></div>
        <img src="./jewelry_bg_demo.png" alt="Jewelry Background" className="hero-bg-image" />
        
        <div className="home-hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="home-hero-text"
          >
            <h1 className="heading-font gold-gradient-text">Elegance in Every Detail</h1>
            <p>Welcome to Chemmanur Jewellers. A legacy of purity, trust, and exquisite craftsmanship.</p>
            <div className="hero-actions">
              <Link to="/shop" className="btn-primary">
                Explore Collections <ArrowRight size={18} />
              </Link>
              <Link to="/company" className="btn-outline">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-container">
          
          <motion.div 
            className="highlight-column glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="gold-gradient-text uppercase-title">Chairman's Message</h3>
            <div className="highlight-content">
              <div className="highlight-image-wrapper">
                <img src="./chairman.jpg" alt="Chairman" />
              </div>
              <p className="highlight-text">A company, its culture and its character are all a reflection of its founder.</p>
            </div>
            <Link to="/chairman" className="more-btn gold-gradient-bg">MORE</Link>
          </motion.div>

          <motion.div 
            className="highlight-column glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="gold-gradient-text uppercase-title">MD's Message</h3>
            <div className="highlight-content">
              <div className="highlight-image-wrapper">
                <img src="./md.jpg" alt="MD" />
              </div>
              <p className="highlight-text">What could be a better testimony to our excellence than a tradition</p>
            </div>
            <Link to="/md" className="more-btn gold-gradient-bg">MORE</Link>
          </motion.div>

          <motion.div 
            className="highlight-column glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="gold-gradient-text uppercase-title">Careers @ Chemmanur</h3>
            <div className="highlight-content">
              <div className="highlight-image-wrapper">
                <img src="./careers.jpg" alt="Careers" />
              </div>
              <p className="highlight-text">Our work culture is totally driven by the love for gold. You will find that our people</p>
            </div>
            <Link to="/careers" className="more-btn gold-gradient-bg">MORE</Link>
          </motion.div>

          <motion.div 
            className="highlight-column glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="gold-gradient-text uppercase-title">Schemes @ Chemmanur</h3>
            <div className="highlight-content">
              <div className="highlight-image-wrapper">
                <img src="./schemes.jpg" alt="Schemes" />
              </div>
              <p className="highlight-text">Gold Saving Schemes from Chemmanur - Investments that are worth your money</p>
            </div>
            <Link to="/schemes" className="more-btn gold-gradient-bg">MORE</Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Home;
