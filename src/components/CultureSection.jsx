import { motion } from 'framer-motion';
import { Heart, Users, Star } from 'lucide-react';
import './CultureSection.css';

const CultureSection = () => {
  const cards = [
    {
      icon: <Heart size={32} />,
      title: "Love for Gold",
      desc: "Our work culture is totally driven by the love for gold. You will find our people well-informed about the nuances of this industry."
    },
    {
      icon: <Star size={32} />,
      title: "Friendly Environment",
      desc: "At Chemmanur, we groom our people and offer a friendly environment to learn and grow, strongly committed to our core values."
    },
    {
      icon: <Users size={32} />,
      title: "Strong Brotherhood",
      desc: "Most importantly, we ensure our people enjoy what they do through joyful association, strong brotherhood, and a happy people force."
    }
  ];

  return (
    <section className="culture-section" id="about">
      <div className="culture-container">
        <div className="culture-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-font gold-gradient-text section-title"
          >
            Our Work Culture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Built on core values, passion for the craft, and a commitment to our people.
          </motion.p>
        </div>

        <div className="culture-cards">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel culture-card"
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
