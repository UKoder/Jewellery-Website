import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    "Opportunity to work South India's leading and fastest growing Jewellery company",
    "A committed people friendly policy",
    "Growth along with the company",
    "Absolute transparency and tremendous opportunity for career advancement",
    "Open environment for loud thinking, creativity and innovation",
    "Prospect to explore opportunities in various Chemmanur subsidiary companies",
    "Job security supported by strong values and ethics"
  ];

  return (
    <section className="benefits-section" id="openings">
      <div className="benefits-container">
        
        <div className="benefits-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="benefits-text"
          >
            <h2 className="heading-font gold-gradient-text benefits-title">Why work with Chemmanur Jewellers?</h2>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="benefit-item"
                >
                  <CheckCircle className="benefit-icon" size={24} />
                  <p>{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="careers-cta glass-panel"
          >
            <div className="cta-content">
              <h3 className="heading-font">Careers at Chemmanur</h3>
              <p>For job openings at Chemmanur please send your CV to our email.</p>
              <p className="cta-highlight">Join us to be a part of a much respected and revered heritage!</p>
              
              <a href="mailto:office@chemmanur.com" className="email-btn gold-gradient-bg">
                <Mail size={20} /> office@chemmanur.com
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
