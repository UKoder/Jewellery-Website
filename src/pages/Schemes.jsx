import { motion } from 'framer-motion';
import { Landmark, CalendarDays, Coins } from 'lucide-react';
import './Company.css';

const Schemes = () => {
  const schemes = [
    {
      icon: <CalendarDays size={40} />,
      title: "Gold Purchase Plan (GPP)",
      features: [
        "24-month systematic investment plan",
        "Gold credited to your account based on the daily prevailing rate",
        "0% wastage and making charges upon maturity",
        "Safe and secure accumulation"
      ]
    },
    {
      icon: <Coins size={40} />,
      title: "Dhanavarsha Savings Plan (DSP)",
      features: [
        "12-month installment plan",
        "Option to pay full in the first month for extra gold rate discounts",
        "No value addition charges applied",
        "Flexible investment mapping"
      ]
    },
    {
      icon: <Landmark size={40} />,
      title: "Swarna Varsha Plan (SVP)",
      features: [
        "Single initial remittance with a set minimum",
        "Exchange old or damaged ornaments seamlessly",
        "High returns matching real-time market standards",
        "Protected from market inflation"
      ]
    }
  ];

  return (
    <div className="company-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Gold Saving Schemes</h1>
        <p className="page-subtitle max-w-800">
          Investments that are worth your money. Secure your future with Chemmanur.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {schemes.map((scheme, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              style={{ padding: '2.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
                {scheme.icon}
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                {scheme.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {scheme.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)', marginTop: '8px', flexShrink: 0 }}></div>
                    <span style={{ lineHeight: '1.6' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="more-btn gold-gradient-bg" style={{ marginTop: '2rem', width: '100%', textAlign: 'center' }}>
                Join Scheme
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Schemes;
