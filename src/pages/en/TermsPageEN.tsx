import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/LegalPage.css';

const TermsPageEN: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-container">
          <motion.div
            className="legal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="legal-hero-title">Terms & Conditions</h1>
            <p className="legal-hero-subtitle">
              The terms and conditions that apply to the use of our services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-content-container">
          <div className="legal-text">
            <p><strong>Last updated:</strong> December 2024</p>

            <h2>1. Definitions</h2>
            <p>
              In these terms and conditions, the following definitions apply:
            </p>
            <ul>
              <li><strong>Fyxed BV:</strong> the company that provides these services</li>
              <li><strong>Client:</strong> the natural or legal person who uses our services</li>
              <li><strong>Services:</strong> all AI-powered communication and automation services</li>
              <li><strong>Agreement:</strong> any agreement between Fyxed BV and the Client</li>
            </ul>

            <h2>2. Applicability</h2>
            <p>
              These terms and conditions apply to all offers, agreements, and deliveries of
              services by Fyxed BV, unless otherwise agreed in writing.
            </p>

            <h2>3. Offers and agreements</h2>
            <ul>
              <li>All offers are non-binding and valid for 30 days</li>
              <li>Agreements are concluded through written confirmation</li>
              <li>Changes are only valid if agreed upon in writing</li>
              <li>Additional work may be charged separately</li>
            </ul>

            <h2>4. Service delivery</h2>
            <p>
              Fyxed BV provides AI-powered services for customer service, lead management, and
              sales support. We strive for optimal availability but cannot guarantee 100% uptime.
              Service levels and performance metrics are specified in service agreements.
            </p>

            <h2>5. Prices and payment</h2>
            <ul>
              <li>All prices are exclusive of VAT unless otherwise stated</li>
              <li>Payment is due within 14 days of invoice date</li>
              <li>Late payment may result in interest charges and collection costs</li>
              <li>Subscription fees are charged in advance</li>
              <li>Price changes require 30 days notice</li>
            </ul>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties commit to maintaining confidentiality of all confidential information
              they receive during the collaboration. This includes customer data, business
              processes, and proprietary technologies.
            </p>

            <h2>7. Data processing</h2>
            <p>
              Client data is processed according to our Privacy Policy and applicable data
              protection laws. Clients retain ownership of their data and can request deletion
              or export at any time.
            </p>

            <h2>8. Liability</h2>
            <p>
              Fyxed BV's liability is limited to the amount paid by our insurer in the relevant
              case, or in the absence thereof, to the invoice amount of the relevant assignment,
              with a maximum of €50,000 per incident.
            </p>

            <h2>9. Intellectual property</h2>
            <p>
              All intellectual property rights to our software, algorithms, and systems rest
              with Fyxed BV. Clients receive a non-exclusive license to use our services during
              the agreement term.
            </p>

            <h2>10. Termination</h2>
            <p>
              Agreements may be terminated by both parties with due observance of a notice
              period of one month. In case of material breach, immediate termination is allowed.
              Data export assistance is provided upon termination.
            </p>

            <h2>11. Force majeure</h2>
            <p>
              Neither party is liable for delays or failures in performance resulting from
              circumstances beyond their reasonable control, including natural disasters,
              government actions, or technical failures of third parties.
            </p>

            <h2>12. Applicable law</h2>
            <p>
              Dutch law applies to all agreements. Disputes will be submitted to the competent
              court in the Netherlands. Parties will first attempt to resolve disputes through
              mediation.
            </p>

            <h2>13. Contact</h2>
            <p>
              For questions about these terms and conditions, you can contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@fyxedbv.nl<br/>
              <strong>Phone:</strong> +31 (970) 102 50463<br/>
              <strong>Address:</strong> Fyxed BV, The Netherlands
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPageEN;