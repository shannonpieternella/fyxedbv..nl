import React from 'react';
import { motion } from 'framer-motion';
import CallToActionEN from '../../components/en/CallToActionEN';
import '../../styles/ServicePage.css';

const SalesAgentsPageEN: React.FC = () => {
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
              Virtual salespeople who qualify prospects, give presentations, and close deals like your best sales team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-container">
          <div className="service-content">
            <h2>Your personal AI sales team</h2>
            <p>
              Our AI Sales Agents are trained on the best sales techniques and know your products
              better than any salesperson. They conduct full sales conversations, handle objections
              professionally, and close deals with proven effectiveness.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>🎯 Lead Qualification</h3>
                <p>Automatic screening of prospects for budget, authority, and need.</p>
              </div>
              <div className="feature">
                <h3>💼 Personalized Pitches</h3>
                <p>Every presentation is tailored to the specific needs of the customer.</p>
              </div>
              <div className="feature">
                <h3>🤝 Objection Handling</h3>
                <p>AI recognizes and handles common objections with proven responses.</p>
              </div>
              <div className="feature">
                <h3>📅 Appointment Scheduling</h3>
                <p>Direct integration with calendars for smooth follow-up appointments.</p>
              </div>
            </div>

            <div className="benefits">
              <h2>Benefits of AI Sales Agents</h2>
              <ul>
                <li>Expand your sales team without additional salaries</li>
                <li>Consistent quality in every customer interaction</li>
                <li>Work on multiple leads simultaneously</li>
                <li>No sick days or vacation time</li>
                <li>Automatically scales with your growth</li>
                <li>Available 24/7 across all time zones</li>
                <li>Continuous learning and improvement</li>
              </ul>
            </div>

            <div className="sales-process">
              <h2>Our AI Sales Process</h2>
              <div className="process-grid">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Discovery</h4>
                  <p>AI uncovers customer pain points and requirements</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Qualification</h4>
                  <p>Determines budget, decision-making authority, and timeline</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Presentation</h4>
                  <p>Tailored product demo based on specific needs</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Closing</h4>
                  <p>Professional deal closing with automated follow-up</p>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <h2>Sales Performance</h2>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">300%</div>
                  <div className="stat-label">More Qualified Leads</div>
                </div>
                <div className="stat">
                  <div className="stat-number">45%</div>
                  <div className="stat-label">Higher Close Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number">90%</div>
                  <div className="stat-label">Time Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionEN />
    </div>
  );
};

export default SalesAgentsPageEN;