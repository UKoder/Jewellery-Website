import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { storeData } from '../data/storeData';
import './Company.css';
import './OurStores.css';

const OurStores = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedBranch(''); // reset branch when state changes
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const currentBranches = selectedState ? storeData[selectedState] : [];
  const selectedStoreObj = currentBranches.find(b => b.branch === selectedBranch);

  return (
    <div className="company-page stores-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Our Stores</h1>
      </section>

      <section className="container" style={{ paddingBottom: '8rem', maxWidth: '1000px' }}>
        <motion.div 
          className="glass-panel store-locator-panel"
          style={{ padding: '3rem', borderRadius: '20px', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Corporate Office - Left Column */}
          <div style={{ flex: '1 1 350px' }}>
            <h3 className="heading-font" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#B8860B', fontWeight: 'bold' }}>
              Chemmanur Corporate Office
            </h3>
            <div style={{ color: 'var(--color-text)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              G2-19/1, Karnataka Central Diocesan Complex,<br/>
              3rd Cross, Mission Road,<br/>
              CSI Compound<br/>
              (behind Chemmanur Jewellers showroom, J.C Road),<br/>
              Bangalore - 560027<br/>
              Karnataka, India<br/><br/>
              Ph: 22221928 / 22238539 / 32904080<br/>
              Fax: 22210559<br/>
              Email: <a href="mailto:corporateoffice@chemmanur.com" style={{ color: 'var(--color-text)' }}>corporateoffice@chemmanur.com</a>
            </div>
          </div>

          {/* Store Locator - Right Column */}
          <div style={{ flex: '1 1 350px' }}>
            
            <h3 className="heading-font" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#B8860B', fontWeight: 'bold' }}>
              Global Stores
            </h3>
            <p style={{ color: 'var(--color-text)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Please <Link to="/group/chemmanur-global" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>click here</Link> to locate our global stores.
            </p>

            <h3 className="heading-font" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#B8860B', fontWeight: 'bold' }}>
              Store Locator
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--color-text)', fontSize: '0.95rem' }}>Please select our stores :</span>
              <select 
                value={selectedState} 
                onChange={handleStateChange}
                className="store-select"
              >
                <option value="">--Select State--</option>
                {Object.keys(storeData).map((state, idx) => (
                  <option key={idx} value={state}>{state}</option>
                ))}
              </select>
              <select 
                value={selectedBranch} 
                onChange={handleBranchChange}
                className="store-select"
                disabled={!selectedState}
              >
                <option value="">-- Please Select --</option>
                {currentBranches.map((b, idx) => (
                  <option key={idx} value={b.branch}>{b.branch}</option>
                ))}
              </select>
            </div>

            {/* Selected Store Details */}
            <div style={{ minHeight: '150px' }}>
              {selectedStoreObj && (
                <motion.div 
                  style={{ color: 'var(--color-text)', lineHeight: '1.8', whiteSpace: 'pre-line', paddingLeft: '2rem', fontSize: '0.95rem' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={selectedBranch}
                >
                  {selectedStoreObj.address}
                </motion.div>
              )}
            </div>

          </div>

        </motion.div>
      </section>
    </div>
  );
};

export default OurStores;
