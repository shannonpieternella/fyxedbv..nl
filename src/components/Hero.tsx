import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="highlight-gradient">AI-gestuurde klantenservice</span>
            <br />die nooit stopt.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            AI voice agents die <strong>24/7 inbound én outbound telefoontjes</strong> afhandelen,
            leads kwalificeren en afspraken inplannen. Verhoog uw bereikbaarheid en
            <span className="highlight"> optimaliseer uw conversies.</span>
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-ctas">
              <a
                href="https://calendly.com/fyxedbv/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple btn-apple-primary hero-btn"
              >
                Plan een demo met Fyxed
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-apple btn-apple-secondary"
              >
                Ontdek onze diensten
              </button>
            </div>
            <div className="cta-subtext">Gratis demo • 30 min • Geen verplichtingen</div>
            <div className="hero-features">
              <span className="feature-chip">Inbound calls</span>
              <span className="feature-chip">Outbound calls</span>
              <span className="feature-chip">24/7 beschikbaar</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="ai-orb"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="orb-core">
              <motion.div
                className="orb-pulse"
                animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="orb-glow" />
            </div>

            <motion.div
              className="orb-ring ring-a"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="orb-ring ring-b"
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="orb-ring ring-c"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />

            <div className="orb-particles">
              {[...Array(8)].map((_, i) => (
                <motion.span
                  key={i}
                  className={`particle p-${i + 1}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
