import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on home, navigate to home with hash so HomePage can handle scroll
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
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
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('services')} className="navbar-link">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('cases')} className="navbar-link">
            Cases
          </button>
          <button onClick={() => scrollToSection('cta')} className="navbar-link">
            {t('nav.contact')}
          </button>
        </div>

        <div className="navbar-cta">
          <LanguageSwitcher />
          <a className="navbar-phone" href="tel:+3197010250463">+31 (970) 102 50463</a>
          <button
            onClick={() => scrollToSection('cta')}
            className="navbar-demo-btn"
          >
            {t('nav.demo')}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
