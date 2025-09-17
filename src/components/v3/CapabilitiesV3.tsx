import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/LandingV3.css';

type TabKey = 'inbound' | 'outbound' | 'sales';

const content: Record<TabKey, { title: string; points: string[]; cta?: { label: string; href: string } }> = {
  inbound: {
    title: 'Inbound Klantenservice',
    points: [
      'Neemt ieder gesprek aan, 24/7',
      'Beantwoordt veelgestelde vragen direct',
      'Handelt cases af of zet door',
      'Altijd vriendelijk en consistent',
    ],
    cta: { label: 'Bekijk AI Klantenservice', href: '/ai-klantenservice' },
  },
  outbound: {
    title: 'Outbound Lead Reactivatie',
    points: [
      'Belt leads proactief terug',
      'Realtime kwalificatie volgens uw script',
      'Plant afspraken in uw agenda',
      'Verhoogt conversie en show‑up',
    ],
    cta: { label: 'Bekijk Lead Reactivatie', href: '/ai-lead-reactivatie' },
  },
  sales: {
    title: 'AI Sales Agents',
    points: [
      'Combineert inbound en outbound',
      'Nurturet en volgt slim op',
      'Direct doorverbinden met sales',
      'Altijd op tijd, nooit moe',
    ],
    cta: { label: 'Bekijk Sales Agents', href: '/ai-sales-agents' },
  },
};

const CapabilitiesV3: React.FC = () => {
  const [tab, setTab] = useState<TabKey>('inbound');
  const active = content[tab];

  return (
    <section id="services" className="v3-capabilities">
      <div className="v3-container">
        <h2 className="v3-section-title">Wat onze AI‑agents voor u doen</h2>
        <p className="v3-section-sub">Volledige inbound en outbound telefonie met natuurlijke gesprekken, realtime kwalificatie en directe doorverbinding of afspraakplanning.</p>

        <div className="v3-tabs">
          {(['inbound','outbound','sales'] as TabKey[]).map((key) => (
            <button
              key={key}
              className={`v3-tab ${tab === key ? 'active' : ''}`}
              onClick={() => setTab(key)}
              aria-pressed={tab === key}
            >
              {key === 'inbound' && 'Inbound'}
              {key === 'outbound' && 'Outbound'}
              {key === 'sales' && 'Sales'}
            </button>
          ))}
        </div>

        <div className="v3-tab-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="v3-panel-card"
            >
              <div className="v3-panel-left">
                <h3 className="v3-panel-title">{active.title}</h3>
                <ul className="v3-bullets">
                  {active.points.map((pt, i) => (
                    <li key={i}><span className="v3-bullet-dot"/> {pt}</li>
                  ))}
                </ul>
                {active.cta && (
                  <a className="btn-apple btn-apple-secondary" href={active.cta.href}>{active.cta.label}</a>
                )}
              </div>
              <div className="v3-panel-right">
                {/* Visual placeholder: simple stacked cards with glow */}
                <div className="v3-stack">
                  <div className="v3-stack-card"/>
                  <div className="v3-stack-card"/>
                  <div className="v3-stack-card"/>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesV3;

