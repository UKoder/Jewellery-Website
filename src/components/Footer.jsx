import { Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Online Shop', href: '/shop' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Legal Disclaimer', href: '#' },
    { name: 'Site Map', href: '/' },
    { name: 'Careers', href: '/careers' },
    { name: 'Online Shopping faqs', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
            <Gem className="footer-logo-icon" size={32} />
            <span className="heading-font gold-gradient-text">Chemmanur</span>
          </Link>
          <p className="footer-tagline">
            Pioneers in the jewellery industry, carrying goodwill worth its weight in gold. Let's make every moment precious together.
          </p>
        </div>

        <div className="footer-links-container">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.slice(0, 4).map((link, i) => (
                <li key={i}><Link to={link.href}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              {footerLinks.slice(4).map((link, i) => (
                <li key={i}><Link to={link.href}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chemmanur Jewellers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
