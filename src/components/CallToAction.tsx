import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/CallToAction.css';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const handleDemoClick = () => {
    // In a real application, this would integrate with Calendly or another booking system
    window.open('https://calendly.com/fyxed-bv', '_blank');
  };

  return (
    <section id="cta" className="call-to-action" ref={ref}>
      <div className="cta-container">
        <motion.div
          className="cta-content"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="cta-title">
            {t('cta.title')}
          </h2>

          <p className="cta-subtitle">
            {t('cta.subtitle')}
          </p>

          <motion.button
            className="cta-button"
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onClick={handleDemoClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-text">{t('cta.button')}</span>
            <motion.div
              className="button-pulse"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          <div className="cta-benefits">
            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>{t('cta.benefit.time')}</span>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>{t('cta.benefit.obligation')}</span>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span>{t('cta.benefit.result')}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="cta-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="demo-preview">
            <div className="demo-screen">
              <div className="demo-header">
                <span>{t('cta.demo.header')}</span>
                <div className="demo-status">
                  <motion.div
                    className="status-dot"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span>{t('cta.demo.online')}</span>
                </div>
              </div>

              <div className="demo-content">
                <div className="demo-metrics">
                  <div className="metric">
                    <span className="metric-value">156</span>
                    <span className="metric-label">{t('cta.demo.calls')}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">67%</span>
                    <span className="metric-label">{t('cta.demo.conversion')}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">€12.4k</span>
                    <span className="metric-label">{t('cta.demo.revenue')}</span>
                  </div>
                </div>

                <div className="demo-chart">
                  <motion.div
                    className="chart-bar"
                    initial={{ height: 0 }}
                    animate={inView ? { height: "60%" } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  <motion.div
                    className="chart-bar"
                    initial={{ height: 0 }}
                    animate={inView ? { height: "85%" } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <motion.div
                    className="chart-bar"
                    initial={{ height: 0 }}
                    animate={inView ? { height: "95%" } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;