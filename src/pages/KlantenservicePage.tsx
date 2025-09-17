import React from 'react';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';
import '../styles/ServicePage.css';

const KlantenservicePage: React.FC = () => {
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
              AI Klantenservice
            </h1>
            <p className="service-hero-subtitle">
              24/7 professionele klantenservice die nooit slaapt, nooit ziek wordt en altijd vriendelijk blijft.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-container">
          <div className="service-content">
            <h2>Altijd bereikbaar voor uw klanten</h2>
            <p>
              Onze AI-klantenservice combineert geavanceerde natuurlijke taalverwerking met diepgaande
              kennis van uw bedrijf. Het resultaat? Klanten die het gevoel hebben dat ze met een echte
              medewerker praten, ongeacht het tijdstip.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>🕒 24/7 Beschikbaarheid</h3>
                <p>Uw klanten kunnen altijd terecht voor vragen en ondersteuning.</p>
              </div>
              <div className="feature">
                <h3>🧠 Intelligente Antwoorden</h3>
                <p>AI begrijpt context en levert accurate, relevante antwoorden.</p>
              </div>
              <div className="feature">
                <h3>🔄 Naadloze Overdracht</h3>
                <p>Complexe vragen worden soepel overgedragen aan uw team.</p>
              </div>
              <div className="feature">
                <h3>📚 Lerende Technologie</h3>
                <p>Het systeem wordt slimmer met elke interactie met klanten.</p>
              </div>
            </div>

            <div className="benefits">
              <h2>Waarom kiezen voor AI Klantenservice?</h2>
              <ul>
                <li>Reduceer wachttijden tot nul</li>
                <li>Verhoog klanttevredenheid aanzienlijk</li>
                <li>Bespaar kosten op traditionele call centers</li>
                <li>Schaal moeiteloos tijdens drukke periodes</li>
                <li>Verzamel waardevolle klantinzichten automatisch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default KlantenservicePage;