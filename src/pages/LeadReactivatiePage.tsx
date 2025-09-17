import React from 'react';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';
import '../styles/ServicePage.css';

const LeadReactivatiePage: React.FC = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-container">
          <motion.div
            className="service-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="service-hero-title">
              AI Lead Reactivatie
            </h1>
            <p className="service-hero-subtitle">
              Heractiveer slapende leads en transformeer ze in actieve klanten met intelligente AI-communicatie.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-container">
          <div className="service-content">
            <h2>Hoe werkt AI Lead Reactivatie?</h2>
            <p>
              Onze AI-systemen analyseren uw leadsdatabase en identificeren potentiële klanten die
              eerder interesse hebben getoond maar nog geen aankoop hebben gedaan. Met gepersonaliseerde
              communicatie brengen we deze leads weer tot leven.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>🎯 Intelligente Targeting</h3>
                <p>AI analyseert gedragspatronen en selecteert de meest veelbelovende leads.</p>
              </div>
              <div className="feature">
                <h3>💬 Gepersonaliseerde Berichten</h3>
                <p>Elke lead ontvangt een op maat gemaakte boodschap gebaseerd op hun historie.</p>
              </div>
              <div className="feature">
                <h3>⏰ Optimale Timing</h3>
                <p>AI bepaalt het perfecte moment om contact op te nemen voor maximale respons.</p>
              </div>
              <div className="feature">
                <h3>📊 Real-time Analytics</h3>
                <p>Volg de voortgang en resultaten van uw reactivatiecampagnes live.</p>
              </div>
            </div>

            <div className="benefits">
              <h2>Voordelen van AI Lead Reactivatie</h2>
              <ul>
                <li>Verhoog conversiepercentages van bestaande leads</li>
                <li>Bespaar tijd en kosten op nieuwe leadgeneratie</li>
                <li>Automatiseer het hele reactivatieproces</li>
                <li>Personaliseer communicatie op schaal</li>
                <li>Verbeter ROI van uw marketinginspanningen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default LeadReactivatiePage;