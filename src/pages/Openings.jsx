import { motion } from 'framer-motion';
import { MapPin, Mail, Briefcase, FileText } from 'lucide-react';
import './Company.css'; 

const Openings = () => {
  return (
    <div className="company-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Job Openings</h1>
        <p className="page-subtitle max-w-800 mx-auto">
          Join South India's leading and fastest-growing jewellery company. Experience a committed, people-friendly work culture driven by strong values and ethics.
        </p>
      </section>

      <section className="container mt-4 mb-5">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Submission Instructions Panel */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '3rem', display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ padding: '1rem', background: 'var(--color-gold)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <FileText size={28} style={{ color: 'var(--color-bg)' }} />
            </div>
            
            <h2 className="heading-font mb-3" style={{ fontSize: '2rem' }}>How to Apply</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              We are continually looking for passionate and talented individuals to join our expanding team. To apply for current or future roles, please forward your comprehensive technical and professional CV directly to our human resources team.
            </p>
            
            <div style={{ marginTop: 'auto', background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)' }}>
              <h4 className="heading-font gold-gradient-text mb-2">Official Careers Email</h4>
              <a href="mailto:office@chemmanur.com" className="email-link flex-align" style={{ fontSize: '1.2rem', color: 'var(--color-text)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={24} style={{ color: 'var(--color-gold)' }} />
                <strong>office@chemmanur.com</strong>
              </a>
            </div>
          </motion.div>

          {/* Location Details Panel */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '3rem', display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-gold)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Briefcase size={28} className="gold-gradient-text" />
            </div>
            
            <h2 className="heading-font mb-3" style={{ fontSize: '2rem' }}>Walk-in & HQ</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              In addition to emailing us, potential candidates may occasionally drop off their CV or attend formal walk-in interviews at our corporate headquarters at the location precisely mapped below.
            </p>

            <div style={{ marginTop: 'auto' }}>
              <h4 className="heading-font gold-gradient-text mb-3">Corporate Headquarters</h4>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px' }}>
                <MapPin size={24} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>Chemmanur International Jewellers</p>
                  <p className="text-muted mt-1" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                    G2-19/1, Karnataka Central Diocesan Complex,<br />
                    3rd Cross, Mission Road, CSI Compound<br />
                    (behind Chemmanur Jewellers showroom, J.C Road),<br />
                    Bangalore - 560027, Karnataka, India<br />
                    Phone: 080-22221928, 22238539
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Sub-note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem', padding: '0 2rem' }}
        >
          <p className="text-muted">
            <em>Disclaimer: Chemmanur Jewellers will never ask for payment during the recruitment process. Please ensure you are only communicating with verified "@chemmanur.com" email addresses.</em>
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Openings;
