import React from 'react';
import '../../styles/LandingV3.css';

const ComparisonV3EN: React.FC = () => {
  return (
    <section id="ai-vs-human" className="v3-compare">
      <div className="v3-container">
        <h2 className="v3-section-title">AI employee vs. human employee</h2>
        <p className="v3-section-sub">Both solve customer contact issues. Only the AI employee works 24/7, scales in seconds, and remains consistently reliable.</p>

        <div className="v3-compare-grid">
          <div className="v3-col">
            <div className="v3-badge-title">AI employee (Fyxed)</div>
            <ul className="v3-list">
              <li><i/> 24/7 available — no breaks, no queues</li>
              <li><i/> Consistent quality and tone of voice</li>
              <li><i/> Learns scripts quickly; updates live in minutes</li>
              <li><i/> Scalable: 10 → 10,000 calls without additional hiring</li>
              <li><i/> Integrates with calendar/CRM/telephony</li>
              <li><i/> Cost-effective: pay for results and usage</li>
            </ul>
          </div>

          <div className="v3-col dim">
            <div className="v3-badge-title">Human employee</div>
            <ul className="v3-list">
              <li><i/> Works business hours; absence/illness/holidays</li>
              <li><i/> Variable quality, depends on person/day</li>
              <li><i/> Onboarding and turnover cost time and money</li>
              <li><i/> Scaling requires hiring, training and management</li>
              <li><i/> Manual notes/appointments take extra time</li>
              <li><i/> Fixed salary costs + overhead</li>
            </ul>
          </div>
        </div>

        <div className="v3-compare-foot">
          <div className="v3-foot-card">
            <div>
              <strong>In summary:</strong> our AI employees feel like top-tier service, are always available, and deliver predictable results.
            </div>
            <a className="btn-apple btn-apple-primary" href="#cta">Schedule a demo</a>
          </div>
          <p className="v3-disclaimer">Prices and results vary by company; we'll discuss this during the demo.</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonV3EN;