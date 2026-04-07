import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Company.css'; // Reuse some layout styles
import './GroupCompany.css';

import { Link } from 'react-router-dom';
import { subsidiaries } from '../data/subsidiaries';

const GroupCompany = () => {
  return (
    <div className="company-page group-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Group of Companies</h1>
        <p className="page-subtitle max-w-800">
          Capitalizing on the momentum gained from our success in the jewellery business, we have expanded to establish ourselves in various business streams.
        </p>
      </section>

      <section className="group-grid-section">
        <div className="container">
          <div className="companies-grid">
            {subsidiaries.map((company, index) => {
              const snippet = company.content && company.content.length > 0 
                ? (company.content[0].substring(0, 80) + "...") 
                : "Explore more about " + company.title;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/group/${company.id}`} className="company-card glass-panel" style={{ display: 'block', height: '100%' }}>
                    <div className="company-card-icon">
                      <Briefcase size={28} />
                    </div>
                    <h3>{company.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>{snippet}</p>
                    <div className="hover-line"></div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupCompany;
