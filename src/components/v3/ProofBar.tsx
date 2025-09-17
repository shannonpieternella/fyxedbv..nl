import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/LandingV3.css';

const ProofBar: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { value: '+35%', labelKey: 'proof.reactivation' },
    { value: '24/7', labelKey: 'proof.availability' },
    { value: '95%', labelKey: 'proof.satisfaction' },
  ];

  return (
    <section className="v3-proof">
      <div className="v3-container v3-proof-row">
        {items.map((it, i) => (
          <div key={i} className="v3-proof-item">
            <span className="v3-proof-value">{it.value}</span>
            <span className="v3-proof-label">{t(it.labelKey)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProofBar;

