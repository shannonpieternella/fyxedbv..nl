import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/BusinessModel.css';

const BusinessModel: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="business-model" ref={ref}>
      <div className="business-model-container">
        <motion.div
          className="pricing-card"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{
            y: -10,
            rotateX: 5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="pricing-header">
            <h2 className="pricing-title">Eerlijk model. Alleen betalen voor resultaat.</h2>
            <p className="pricing-subtitle">Geen vaste kosten, geen risico.</p>
          </div>

          <div className="pricing-content">
            <div className="pricing-example">
              <span className="pricing-label">Bijvoorbeeld:</span>
              <div className="pricing-amount">
                <span className="currency">€</span>
                <span className="price">20</span>
                <span className="unit">per afspraak</span>
              </div>
            </div>

            <div className="pricing-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Alleen betalen bij resultaat</span>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Geen maandelijkse abonnementskosten</span>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Transparante rapportage</span>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Persoonlijke AI-stemmen</span>
              </div>
            </div>

            <motion.button
              className="pricing-cta"
              onClick={() => scrollToSection('cta')}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(0, 122, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Bereken uw ROI
            </motion.button>
          </div>

          <div className="pricing-note">
            <p>Prijs varieert per service. Vraag een gepersonaliseerde offerte aan.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;