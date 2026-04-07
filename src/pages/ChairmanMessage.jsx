import { motion } from 'framer-motion';
import './Company.css'; // Inheriting base styles

const ChairmanMessage = () => {
  return (
    <div className="company-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Chairman's Message</h1>
        <p className="page-subtitle max-w-800">
          George Chemmanur
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
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* The layout allows an image on the left, text on the right */}
            <div style={{ flex: '1 1 300px' }}>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                A company, its culture and its character are all a reflection of its founder. Chemmanur Jewellers took shape in the mind and heart of our Chairman and founder - Chemmanur Devassy George, popularly known as George Chemmanur. He conceived the organization, fueled it with his vision and steered its growth. If today Chemmanur Jewellers is a trusted and revered organization with a huge customer following, it is the fruit of the hard work of this great man.
              </p>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                George Chemmanur was born to Late Chemmanur Devassy Master and Late Annama Devassy in Thrissur District, Kerala. The family was traditionally into jewellery making but interestingly, George's father did not take to this profession. He was a respected school master in their village. But the seeds of the heritage took life in George and he found his love for this profession at an age as early as sixteen. After completing his high school education and a stint with agriculture along with his father, George entered the jewellery business, which was in the family since 1863.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              George was fast to learn the ropes of the trade and mastering it. He established Janatha Jewelers in Varandarapilly as a partnership venture. He then went ahead to the start his own store along with his two brothers Joseph and Vincent at Thrissur, the Chemmanur Jewellers. From then, there was no looking back. George built a relationship of trust with the people of Kerala and opened more jewelry outlets. Leaving his brothers to handle operations in Kerala, he then took the Chemmanur flag abroad to the city of Dubai. After the successful establishment of showrooms in the Middle East, wanting to return to his homeland, George saw huge opportunity in Bangalore and moved there in 1986. It was a brand new phase in the history of Chemmanur Jewellers with over 17 showrooms being added to our fleet across Karnataka and TamilNadu.
            </p>
            <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Considered as a patriarch of this industry, his experience and knowledge was much respected. The Government of India for industry related issues have consulted George at various times. Being the energetic self that George is, he did not limit his caliber into the jewellery industry. With his profound knowledge and natural flair for finance George served as the Director at The Catholic Syrian Bank in Thrissur for over a decade.
            </p>
            <p style={{ color: 'var(--color-text)', lineHeight: '1.8' }}>
              A humanitarian by heart, George made sure that philanthropy became a natural extension of Chemmanur's activities. He established schools, colleges, community halls, helped in building temples and churches, and is involved in many more charitable initiatives.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ChairmanMessage;
