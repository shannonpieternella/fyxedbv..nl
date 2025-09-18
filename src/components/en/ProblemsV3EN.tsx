import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/LandingV3.css';

const problems = [
  { icon: '📧', text: 'Emails disappear in overcrowded inboxes' },
  { icon: '📱', text: 'Text messages are increasingly ignored' },
  { icon: '☎️', text: 'Phone availability is limited to office hours' },
  { icon: '🤝', text: 'But personal contact still makes all the difference' },
];

const ProblemsV3EN: React.FC = () => {
  return (
    <section id="problems-v3" className="v3-problems">
      <div className="v3-container v3-problems-grid">
        <div className="v3-problems-left">
          <h2 className="v3-problems-title">Your customers deserve more than a voicemail.</h2>
          <div className="v3-timeline">
            {problems.map((p, idx) => (
              <motion.div
                key={idx}
                className="v3-problem-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="v3-problem-icon" aria-hidden>{p.icon}</div>
                <div className="v3-problem-text">{p.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="v3-problems-right">
          <motion.div
            className="v3-solution-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="v3-solution-title">Our AI solution</h3>
            <p className="v3-solution-desc">
              Continuous, professional communication with your customers - available 24/7, always friendly, and never a missed opportunity.
            </p>

            <div className="v3-solution-badges">
              <span className="v3-badge">Inbound support</span>
              <span className="v3-badge">Outbound follow-ups</span>
              <span className="v3-badge">Real-time qualification</span>
              <span className="v3-badge">Direct transfer</span>
            </div>

            <div className="v3-flow">
              <svg viewBox="0 0 600 140" className="v3-flow-svg" aria-hidden>
                <defs>
                  <linearGradient id="v3flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#007aff"/>
                    <stop offset="100%" stopColor="#64d2ff"/>
                  </linearGradient>
                </defs>
                <motion.path
                  d="M10 70 C 120 10, 180 130, 290 70 S 480 10, 590 70"
                  fill="none"
                  stroke="url(#v3flow)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                {/* Nodes */}
                {[10, 290, 590].map((x, i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={70}
                    r={6}
                    fill="#fff"
                    stroke="#007aff"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                  />
                ))}
              </svg>

              <div className="v3-equalizer" aria-hidden>
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={`v3-bar b-${i}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsV3EN;