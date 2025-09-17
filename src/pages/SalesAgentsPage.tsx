import React from 'react';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';
import '../styles/ServicePage.css';

const SalesAgentsPage: React.FC = () => {
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
              AI Sales Agents
            </h1>
            <p className="service-hero-subtitle">
              Virtuele verkopers die prospects kwalificeren, presentaties geven en deals sluiten zoals uw beste salesteam.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-container">
          <div className="service-content">
            <h2>Uw persoonlijke AI-verkoopteam</h2>
            <p>
              Onze AI Sales Agents zijn getraind op de beste verkooptechnieken en kennen uw producten
              beter dan welke verkoper ook. Ze voeren volledige salesgesprekken, hanteren bezwaren
              professioneel en sluiten deals af met bewezen effectiviteit.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>🎯 Lead Kwalificatie</h3>
                <p>Automatische screening van prospects op budget, autoriteit en behoefte.</p>
              </div>
              <div className="feature">
                <h3>💼 Gepersonaliseerde Pitches</h3>
                <p>Elke presentatie wordt aangepast aan de specifieke behoeften van de klant.</p>
              </div>
              <div className="feature">
                <h3>🤝 Bezwaarhantering</h3>
                <p>AI herkent en behandelt veel voorkomende bezwaren met bewezen antwoorden.</p>
              </div>
              <div className="feature">
                <h3>📅 Afspraakplanning</h3>
                <p>Directe integratie met agenda's voor soepele vervolgafspraken.</p>
              </div>
            </div>

            <div className="benefits">
              <h2>Voordelen van AI Sales Agents</h2>
              <ul>
                <li>Vergroot uw verkoopteam zonder extra salarissen</li>
                <li>Consistente kwaliteit bij elke klantinteractie</li>
                <li>Werk aan meerdere leads tegelijkertijd</li>
                <li>Geen ziekteverzuim of vakantiedagen</li>
                <li>Schaalt automatisch mee met uw groei</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default SalesAgentsPage;