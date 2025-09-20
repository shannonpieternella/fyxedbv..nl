import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const linkVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.h3
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Fyxed BV
            </motion.h3>
            <p className="footer-tagline">
              {isEnglish
                ? "AI assistants that work, so you can grow."
                : "AI-assistenten die werken, zodat u kunt groeien."
              }
            </p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-section">
              <h4 className="footer-nav-title">{isEnglish ? "Navigation" : "Navigatie"}</h4>
              <ul className="footer-nav-list">
                <li>
                  <motion.button
                    onClick={() => scrollToSection('hero')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Home
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection('services')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {isEnglish ? "Services" : "Services"}
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection('cases')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {isEnglish ? "Cases" : "Cases"}
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection('cta')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {isEnglish ? "Contact" : "Contact"}
                  </motion.button>
                </li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4 className="footer-nav-title">{isEnglish ? "Services" : "Services"}</h4>
              <ul className="footer-nav-list">
                <li>
                  <Link to={isEnglish ? "/en/ai-lead-reactivation" : "/ai-lead-reactivatie"}>
                    <motion.span
                      className="footer-link"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {isEnglish ? "AI Lead Reactivation" : "AI Lead Reactivatie"}
                    </motion.span>
                  </Link>
                </li>
                <li>
                  <Link to={isEnglish ? "/en/ai-customer-service" : "/ai-klantenservice"}>
                    <motion.span
                      className="footer-link"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {isEnglish ? "AI Customer Service" : "AI Klantenservice"}
                    </motion.span>
                  </Link>
                </li>
                <li>
                  <Link to={isEnglish ? "/en/ai-sales-agents" : "/ai-sales-agents"}>
                    <motion.span
                      className="footer-link"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      AI Sales Agents
                    </motion.span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4 className="footer-nav-title">{isEnglish ? "Contact" : "Contact"}</h4>
              <ul className="footer-nav-list">
                <li>
                  <motion.a
                    href="tel:+3197010250463"
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    +31 (970) 102 50463
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://calendly.com/fyxedbv/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {isEnglish ? "Schedule a demo" : "Plan een demo"}
                  </motion.a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Fyxed BV. {isEnglish ? "All rights reserved." : "Alle rechten voorbehouden."}
            </p>

            <div className="footer-links">
              <Link to={isEnglish ? "/en/privacy" : "/privacy"}>
                <motion.span
                  className="footer-bottom-link"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {isEnglish ? "Privacy Policy" : "Privacybeleid"}
                </motion.span>
              </Link>
              <Link to={isEnglish ? "/en/terms" : "/terms"}>
                <motion.span
                  className="footer-bottom-link"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {isEnglish ? "Terms & Conditions" : "Algemene Voorwaarden"}
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
