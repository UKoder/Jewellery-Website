import { motion } from 'framer-motion';
import { Target, Eye, Shield, Globe } from 'lucide-react';
import './Company.css';

const Company = () => {
  return (
    <div className="company-page">
      {/* Header */}
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Our Company</h1>
        <p className="page-subtitle">A legacy built on purity and trust</p>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <motion.div 
              className="vm-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Eye className="vm-icon" />
              <h2 className="heading-font">Our Vision</h2>
              <p>To be the most trusted and preferred jeweller globally. To innovate and lead the jewellery industry while keeping our tradition and values intact.</p>
            </motion.div>

            <motion.div 
              className="vm-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Target className="vm-icon" />
              <h2 className="heading-font">Our Mission</h2>
              <p>To deliver uncompromising quality and craftsmanship. To provide our customers with an unparalleled shopping experience and build relationships that last generations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section">
        <div className="container text-center">
          <h2 className="heading-font section-title">Core <span className="gold-gradient-text">Values</span></h2>
          <div className="values-grid mt-4">
            {[
              { icon: <Shield size={32} />, title: 'Purity & Trust', desc: '100% BIS Hallmarked Gold' },
              { icon: <Globe size={32} />, title: 'Global Standards', desc: 'International designs and quality' },
            ].map((val, i) => (
              <motion.div 
                key={i}
                className="value-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="csr-section">
        <div className="container">
          <motion.div 
            className="csr-content glass-panel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="csr-text">
              <h2 className="heading-font gold-gradient-text">Social Responsibility</h2>
              <p className="mt-3">
                At Chemmanur, we believe that giving back to society is our fundamental duty. We actively participate in blood donation camps, free eye clinics, and provide educational support for underprivileged children.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;
