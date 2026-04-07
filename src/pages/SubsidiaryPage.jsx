import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2 } from 'lucide-react';
import { subsidiaries } from '../data/subsidiaries';
import './Company.css';

const SubsidiaryPage = () => {
  const { id } = useParams();
  
  const company = subsidiaries.find(sub => sub.id === id);

  if (!company) {
    return <Navigate to="/group" replace />;
  }

  return (
    <div className="company-page">
      <section className="page-header text-center">
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <Building2 size={48} color="var(--color-gold)" />
        </div>
        <h1 className="heading-font gold-gradient-text" style={{ textTransform: 'capitalize' }}>
          {company.title}
        </h1>
      </section>

      <section className="container" style={{ paddingBottom: '8rem', maxWidth: '900px' }}>
        <Link to="/group" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--color-gold)', fontWeight: '500' }}>
          <ArrowLeft size={18} /> Back to Group
        </Link>
        <motion.div 
          className="glass-panel"
          style={{ padding: '3.5rem', borderRadius: '20px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {company.content.length > 0 ? (
            company.content.map((paragraph, index) => {
              // Enhance email or urls by rendering them boldly if needed, but standard paragraphs are fine
              const isEmailOrUrl = paragraph.includes('@') || paragraph.includes('www.');
              return (
                <p 
                  key={index} 
                  style={{ 
                    color: isEmailOrUrl ? 'var(--color-gold)' : 'var(--color-text)', 
                    lineHeight: '1.8', 
                    marginBottom: '1.5rem', 
                    fontSize: '1.1rem',
                    fontWeight: isEmailOrUrl ? '500' : '400'
                  }}
                >
                  {paragraph}
                </p>
              );
            })
          ) : (
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Detailed information is currently being updated.
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default SubsidiaryPage;
