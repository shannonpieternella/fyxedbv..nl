import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
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
              AI-assistenten die werken, zodat u kunt groeien.
            </p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-section">
              <h4 className="footer-nav-title">Navigatie</h4>
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
                    Services
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection('cases')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Cases
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection('cta')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Contact
                  </motion.button>
                </li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4 className="footer-nav-title">Services</h4>
              <ul className="footer-nav-list">
                <li>
                  <Link to="/ai-lead-reactivatie">
                    <motion.span
                      className="footer-link"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      AI Lead Reactivatie
                    </motion.span>
                  </Link>
                </li>
                <li>
                  <Link to="/ai-klantenservice">
                    <motion.span
                      className="footer-link"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      AI Klantenservice
                    </motion.span>
                  </Link>
                </li>
                <li>
                  <Link to="/ai-sales-agents">
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
              <h4 className="footer-nav-title">Contact</h4>
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
                  <motion.button
                    onClick={() => scrollToSection('cta')}
                    className="footer-link"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Plan een demo
                  </motion.button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Fyxed BV. Alle rechten voorbehouden.
            </p>

            <div className="footer-links">
              <Link to="/privacy">
                <motion.span
                  className="footer-bottom-link"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Privacybeleid
                </motion.span>
              </Link>
              <Link to="/terms">
                <motion.span
                  className="footer-bottom-link"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Algemene Voorwaarden
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
