import React from 'react';
import { motion } from 'framer-motion';
import CallToActionEN from '../../components/en/CallToActionEN';
import '../../styles/ServicePage.css';

const LeadReactivatiePageEN: React.FC = () => {
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
              AI Lead Reactivation
            </h1>
            <p className="service-hero-subtitle">
              Reactivate dormant leads and transform them into active customers with intelligent AI communication.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-container">
          <div className="service-content">
            <h2>How does AI Lead Reactivation work?</h2>
            <p>
              Our AI systems analyze your leads database and identify potential customers who
              previously showed interest but haven't made a purchase yet. Through personalized
              communication, we bring these leads back to life.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>🎯 Intelligent Targeting</h3>
                <p>AI analyzes behavioral patterns and selects the most promising leads.</p>
              </div>
              <div className="feature">
                <h3>💬 Personalized Messages</h3>
                <p>Each lead receives a tailored message based on their history and preferences.</p>
              </div>
              <div className="feature">
                <h3>⏰ Optimal Timing</h3>
                <p>AI determines the perfect moment to reach out for maximum response rates.</p>
              </div>
              <div className="feature">
                <h3>📊 Real-time Analytics</h3>
                <p>Track the progress and results of your reactivation campaigns in real-time.</p>
              </div>
            </div>

            <div className="benefits">
              <h2>Benefits of AI Lead Reactivation</h2>
              <ul>
                <li>Increase conversion rates from existing leads</li>
                <li>Save time and costs on new lead generation</li>
                <li>Automate the entire reactivation process</li>
                <li>Personalize communication at scale</li>
                <li>Improve ROI of your marketing efforts</li>
                <li>Reduce customer acquisition costs</li>
                <li>Maximize value from existing database</li>
              </ul>
            </div>

            <div className="stats-section">
              <h2>Proven Results</h2>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Lead Response Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3x</div>
                  <div className="stat-label">Higher Conversion</div>
                </div>
                <div className="stat">
                  <div className="stat-number">60%</div>
                  <div className="stat-label">Cost Reduction</div>
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

export default LeadReactivatiePageEN;