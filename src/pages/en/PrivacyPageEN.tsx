import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/LegalPage.css';

const PrivacyPageEN: React.FC = () => {
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
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-hero-subtitle">
              Your privacy is important to us. Read how we protect and use your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-content-container">
          <div className="legal-text">
            <p><strong>Last updated:</strong> December 2024</p>

            <h2>1. General</h2>
            <p>
              Fyxed BV ("we", "us", "our") respects your privacy and is committed to protecting
              your personal data. This privacy policy describes how we collect, use, and protect
              your information when you use our services.
            </p>

            <h2>2. What data do we collect?</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information (company name, job title, industry)</li>
              <li>Usage data from our website and services</li>
              <li>Communication data (conversations, emails, messages)</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>

            <h2>3. How do we use your data?</h2>
            <p>We use your personal data for:</p>
            <ul>
              <li>Providing our AI services</li>
              <li>Customer service and support</li>
              <li>Improving our services</li>
              <li>Marketing and communication (with your consent)</li>
              <li>Compliance with legal obligations</li>
              <li>Analytics and performance monitoring</li>
            </ul>

            <h2>4. Data sharing</h2>
            <p>
              We do not sell your personal data to third parties. We may only share your data
              with trusted partners who help us deliver our services, and only under strict
              confidentiality agreements.
            </p>

            <h2>5. Security</h2>
            <p>
              We take appropriate technical and organizational measures to protect your personal
              data against unauthorized access, modification, disclosure, or destruction. This
              includes encryption, secure servers, and regular security audits.
            </p>

            <h2>6. Your rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to rectification or deletion</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2>7. Data retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes for which
              it was collected, or as required by law. Inactive accounts and data are deleted
              after reasonable periods.
            </p>

            <h2>8. International transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside the EU.
              We ensure adequate protection through appropriate safeguards and standard
              contractual clauses.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions about this privacy policy or your personal data, you can contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@fyxedbv.nl<br/>
              <strong>Phone:</strong> +31 (970) 102 50463<br/>
              <strong>Address:</strong> Fyxed BV, The Netherlands
            </p>

            <h2>10. Changes</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of
              significant changes via our website or email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPageEN;