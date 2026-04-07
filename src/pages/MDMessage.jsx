import { motion } from 'framer-motion';
import './Company.css';

const MDMessage = () => {
  return (
    <div className="company-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">MD's Message</h1>
        <p className="page-subtitle max-w-800">
          A tradition of excellence and trust.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: '8rem' }}>
        <motion.div 
          className="glass-panel"
          style={{ padding: '3rem', borderRadius: '20px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-font gold-gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              "What could be a better testimony to our excellence than a tradition of trust"
            </h2>
            <div style={{ height: '3px', width: '60px', background: 'var(--color-gold)', margin: '0 auto' }}></div>
          </div>

          <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Our remarkable journey is fueled by our steadfast commitment to providing uncompromising quality and maintaining transparency with all our esteemed customers. We carry forward the visionary legacy of our founders, ensuring every piece of jewellery not only reflects artistic brilliance but also genuine value. 
          </p>
          <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            At Chemmanur Jewellers, we continuously strive to elevate the standard of craftsmanship while embracing modern technologies to craft designs that resonate across generations. As we chart our future growth, our core philosophy remains unchanged: transforming every customer relationship into a golden bond.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MDMessage;
