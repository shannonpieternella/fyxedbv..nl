import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isEnglish = location.pathname.startsWith('/en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on home, navigate to home with hash so HomePage can handle scroll
    const homePath = isEnglish ? '/en' : '/';
    if (location.pathname !== homePath) {
      navigate(`${homePath}#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Fyxed BV</span>
        </div>

        <div className="navbar-menu">
          <button onClick={() => scrollToSection('hero')} className="navbar-link">
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className="navbar-link">
            {isEnglish ? 'Services' : 'Services'}
          </button>
          <button onClick={() => scrollToSection('cases')} className="navbar-link">
            Cases
          </button>
          <button onClick={() => scrollToSection('cta')} className="navbar-link">
            Contact
          </button>
        </div>

        <div className="navbar-cta">
          <div className="language-links">
            <a
              href="/"
              className={`lang-link ${!location.pathname.startsWith('/en') ? 'active' : ''}`}
            >
              NL
            </a>
            <span className="lang-separator">|</span>
            <a
              href="/en"
              className={`lang-link ${location.pathname.startsWith('/en') ? 'active' : ''}`}
            >
              EN
            </a>
          </div>
          <a className="navbar-phone" href="tel:+3197010250463">+31 (970) 102 50463</a>
          <button
            onClick={() => scrollToSection('cta')}
            className="navbar-demo-btn"
          >
            {isEnglish ? 'Schedule a demo' : 'Plan een demo'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
