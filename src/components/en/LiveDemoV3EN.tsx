import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/LandingV3.css';

const calls = [
  { name: 'Sarah Johnson', meta: 'Inbound • 00:42', badge: 'New' },
  { name: 'Michael Smith', meta: 'Outbound • 12:15', badge: 'Follow-up' },
  { name: 'David Chen', meta: 'Inbound • 03:21', badge: 'Connected' },
  { name: 'Emma Wilson', meta: 'Outbound • 07:05', badge: 'Scheduled' },
];

const LiveDemoV3EN: React.FC = () => {
  return (
    <section id="live-demo" className="v3-live">
      <div className="v3-container v3-live-grid">
        <div className="v3-live-left">
          <h2 className="v3-section-title">Live demo: see AI in action</h2>
          <p className="v3-section-sub">Real-time call feed, counters, and a quick overview of performance — all 100% automated.</p>

          <div className="v3-live-counters">
            <div className="v3-counter">
              <motion.span className="v3-counter-value" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>156</motion.span>
              <span className="v3-counter-label">Calls</span>
            </div>
            <div className="v3-counter">
              <motion.span className="v3-counter-value" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>67%</motion.span>
              <span className="v3-counter-label">Conversion</span>
            </div>
            <div className="v3-counter">
              <motion.span className="v3-counter-value" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>€12.4k</motion.span>
              <span className="v3-counter-label">Revenue</span>
            </div>
          </div>

          <div className="v3-live-chart">
            {[60,85,95,72,88].map((h, i) => (
              <motion.div key={i} className="v3-live-bar" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 * i }} />
            ))}
          </div>

          <div className="v3-cta-row" style={{ marginTop: 16 }}>
            <a className="btn-apple btn-apple-primary" href="https://calendly.com/fyxedbv/30min" target="_blank" rel="noopener noreferrer">Schedule a demo</a>
            <a className="btn-apple btn-apple-secondary" href="/en/ai-customer-service">View customer service</a>
          </div>
        </div>

        <div className="v3-live-right">
          <div className="v3-feed">
            <div className="v3-feed-header">
              <span>Live calls</span>
              <div className="v3-status"><span className="v2-dot"/>Online</div>
            </div>
            <div className="v3-feed-list">
              {calls.map((c, i) => (
                <motion.div key={i} className="v3-feed-item" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                  <div className="v3-avatar"/>
                  <div className="v3-feed-body">
                    <div className="v3-name">{c.name}</div>
                    <div className="v3-meta">{c.meta}</div>
                  </div>
                  <span className="v3-feed-badge">{c.badge}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoV3EN;