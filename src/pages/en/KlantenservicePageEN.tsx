import React from 'react';
import { motion } from 'framer-motion';
import CallToActionEN from '../../components/en/CallToActionEN';
import '../../styles/ServicePage.css';

const KlantenservicePageEN: React.FC = () => {
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
              AI Customer Service
            </h1>
            <p className="service-hero-subtitle">
              24/7 professional customer service that never sleeps, never gets sick, and always stays friendly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-details">
        <div className="service-details-container">
          <div className="service-content">
            <h2>Always available for your customers</h2>
            <p>
              Our AI customer service combines advanced natural language processing with deep
              knowledge of your business. The result? Customers who feel like they're talking
              to a real employee, regardless of the time.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>🕒 24/7 Availability</h3>
                <p>Your customers can always reach out for questions and support.</p>
              </div>
              <div className="feature">
                <h3>🧠 Intelligent Responses</h3>
                <p>AI understands context and delivers accurate, relevant answers.</p>
              </div>
              <div className="feature">
                <h3>🔄 Seamless Handover</h3>
                <p>Complex questions are smoothly transferred to your team.</p>
              </div>
              <div className="feature">
                <h3>📚 Learning Technology</h3>
                <p>The system gets smarter with every customer interaction.</p>
              </div>
            </div>

            <div className="benefits">
              <h2>Why choose AI Customer Service?</h2>
              <ul>
                <li>Reduce waiting times to zero</li>
                <li>Significantly increase customer satisfaction</li>
                <li>Save costs on traditional call centers</li>
                <li>Scale effortlessly during busy periods</li>
                <li>Automatically collect valuable customer insights</li>
                <li>Provide consistent service quality</li>
                <li>Handle multiple languages simultaneously</li>
              </ul>
            </div>

            <div className="use-cases">
              <h2>Perfect for</h2>
              <div className="use-cases-grid">
                <div className="use-case">
                  <h4>E-commerce</h4>
                  <p>Order tracking, returns, product questions</p>
                </div>
                <div className="use-case">
                  <h4>SaaS Companies</h4>
                  <p>Technical support, billing questions, feature guidance</p>
                </div>
                <div className="use-case">
                  <h4>Healthcare</h4>
                  <p>Appointment scheduling, basic health questions</p>
                </div>
                <div className="use-case">
                  <h4>Financial Services</h4>
                  <p>Account inquiries, transaction support, FAQ</p>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <h2>Performance Metrics</h2>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">97%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="stat">
                  <div className="stat-number">80%</div>
                  <div className="stat-label">Cost Reduction</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Availability</div>
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

export default KlantenservicePageEN;