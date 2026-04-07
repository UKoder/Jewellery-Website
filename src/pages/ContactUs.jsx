import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Company.css'; 
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="company-page contact-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Contact Us</h1>
        <p className="page-subtitle max-w-800">
          We would love to hear from you. Reach out to us for any inquiries, feedback, or support.
        </p>
      </section>

      <section className="contact-content-section container">
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div 
            className="contact-info-panel glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font">Get in Touch</h2>
            <p className="text-muted mb-4">Our dedicated team is ready to assist you with your precious investments.</p>
            
            <div className="contact-item">
              <div className="contact-icon bg-gold-subtle">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Corporate Office</h4>
                <p className="text-muted">Chemmanur International Jewellers<br/>Thrissur, Kerala</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon bg-gold-subtle">
                <Phone size={24} />
              </div>
              <div>
                <h4>Phone</h4>
                <p className="text-muted">+91 487 123 4567<br/>Toll Free: 1800 123 456</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon bg-gold-subtle">
                <Mail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p className="text-muted">contact@chemmanur.com<br/>support@chemmanur.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-panel glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="heading-font mb-4">Send us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" className="form-input" placeholder="John Doe" />
              </div>
              
              <div className="form-row">
                <div className="form-group half-width">
                  <label>Email Address</label>
                  <input type="email" className="form-input" placeholder="john@example.com" />
                </div>
                <div className="form-group half-width">
                  <label>Phone Number</label>
                  <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-input" placeholder="How can we help?" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea className="form-input form-textarea" rows="4" placeholder="Write your message here..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-100 flex-center mt-2">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
