import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/LandingV3.css';

const HeroV3: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="v3-hero">
      <div className="v3-container v3-hero-grid">
        <div className="v3-hero-copy">
          <span className="v3-eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="v3-title">{t('hero.title')}</h1>
          <p className="v3-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="v3-cta-row">
            <a className="btn-apple btn-apple-primary" href="#cta">{t('hero.cta.primary')}</a>
            <a className="btn-apple btn-apple-secondary" href="#services">{t('hero.cta.secondary')}</a>
          </div>
          <div className="v3-hero-chips">
            <span className="v3-chip">{t('hero.chip.inbound')}</span>
            <span className="v3-chip">{t('hero.chip.outbound')}</span>
            <span className="v3-chip">{t('hero.chip.qualification')}</span>
            <span className="v3-chip">{t('hero.chip.scheduling')}</span>
          </div>
        </div>

        <div className="v3-hero-visual">
          <motion.div
            className="v3-orb"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="v3-orb-core" />
            <motion.div className="v3-ring r1" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
            <motion.div className="v3-ring r2" animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }} />
            <motion.div className="v3-ring r3" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
            <div className="v3-sparkles">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.span key={i} className={`sp s-${i+1}`} animate={{ y: [0, -6, 0] }} transition={{ duration: 2 + (i % 3), delay: i * 0.1, repeat: Infinity }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="v3-progress" />
    </section>
  );
};

export default HeroV3;
