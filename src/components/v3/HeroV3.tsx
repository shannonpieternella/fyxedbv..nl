import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/LandingV3.css';

const HeroV3: React.FC = () => {
  return (
    <section id="hero" className="v3-hero">
      <div className="v3-container v3-hero-grid">
        <div className="v3-hero-copy">
          <span className="v3-eyebrow">AI Voice Agents • 24/7</span>
          <h1 className="v3-title">AI-gestuurde klantenservice die nooit stopt.</h1>
          <p className="v3-subtitle">
            Professionele AI-assistenten die 24/7 uw klanten ondersteunen, leads kwalificeren en afspraken inplannen.
            Verhoog uw bereikbaarheid en optimaliseer uw conversies.
          </p>
          <div className="v3-cta-row">
            <a className="btn-apple btn-apple-primary" href="#cta">Plan een demo</a>
            <a className="btn-apple btn-apple-secondary" href="#services">Ontdek onze diensten</a>
          </div>
          <div className="v3-hero-chips">
            <span className="v3-chip">Inbound calls</span>
            <span className="v3-chip">Outbound calls</span>
            <span className="v3-chip">Realtime kwalificatie</span>
            <span className="v3-chip">Afspraken plannen</span>
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

