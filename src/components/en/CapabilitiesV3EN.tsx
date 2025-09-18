import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/LandingV3.css';

type TabKey = 'inbound' | 'outbound' | 'sales';

const content: Record<TabKey, { title: string; points: string[]; cta?: { label: string; href: string } }> = {
  inbound: {
    title: 'Inbound Customer Service',
    points: [
      'Answers every call, 24/7',
      'Responds to frequently asked questions directly',
      'Handles cases or transfers them',
      'Always friendly and consistent',
    ],
    cta: { label: 'View AI Customer Service', href: '/en/ai-customer-service' },
  },
  outbound: {
    title: 'Outbound Lead Reactivation',
    points: [
      'Proactively calls back leads',
      'Real-time qualification according to your script',
      'Schedules appointments in your calendar',
      'Increases conversion and show-up',
    ],
    cta: { label: 'View Lead Reactivation', href: '/en/ai-lead-reactivation' },
  },
  sales: {
    title: 'AI Sales Agents',
    points: [
      'Combines inbound and outbound',
      'Nurtures and follows up intelligently',
      'Direct transfer to sales',
      'Always on time, never tired',
    ],
    cta: { label: 'View Sales Agents', href: '/en/ai-sales-agents' },
  },
};

const CapabilitiesV3EN: React.FC = () => {
  const [tab, setTab] = useState<TabKey>('inbound');
  const active = content[tab];

  return (
    <section id="services" className="v3-capabilities">
      <div className="v3-container">
        <h2 className="v3-section-title">What our AI agents do for you</h2>
        <p className="v3-section-sub">Complete inbound and outbound telephony with natural conversations, real-time qualification and direct transfer or appointment scheduling.</p>

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

export default CapabilitiesV3EN;