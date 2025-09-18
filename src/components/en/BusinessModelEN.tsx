import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/BusinessModel.css';

const BusinessModelEN: React.FC = () => {
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
            <h2 className="pricing-title">Fair model. Only pay for results.</h2>
            <p className="pricing-subtitle">No fixed costs, no risk.</p>
          </div>

          <div className="pricing-content">
            <div className="pricing-example">
              <span className="pricing-label">For example:</span>
              <div className="pricing-amount">
                <span className="currency">€</span>
                <span className="price">20</span>
                <span className="unit">per appointment</span>
              </div>
            </div>

            <div className="pricing-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Only pay for results</span>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>No monthly subscription costs</span>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Transparent reporting</span>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Personal AI voices</span>
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
              Calculate your ROI
            </motion.button>
          </div>

          <div className="pricing-note">
            <p>Price varies per service. Request a personalized quote.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModelEN;