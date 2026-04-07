import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gem, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Company', href: '/company' },
    { name: 'Group of company', href: '/group' },
    { name: 'Online Shopping', href: '/shop' },
    { name: 'Careers', href: '/careers' },
    { name: 'Our Stores', href: '/stores' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Gem className="logo-icon" />
          <span className="heading-font gold-gradient-text">Chemmanur</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.href} 
              className={`nav-link ${location.pathname === link.href ? 'active-link' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="mobile-controls" style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn mobile-only" 
            aria-label="Toggle Theme"
            style={{ display: 'flex', alignItems: 'center', background: 'none', color: 'var(--color-text)' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
