import React from 'react';
import '../../styles/LandingV3.css';

const items = [
  { value: '+35%', label: 'old customer reactivation' },
  { value: '24/7', label: 'available without breaks' },
  { value: '95%', label: 'customer satisfaction' },
];

const ProofBarEN: React.FC = () => {
  return (
    <section className="v3-proof">
      <div className="v3-container v3-proof-row">
        {items.map((it, i) => (
          <div key={i} className="v3-proof-item">
            <span className="v3-proof-value">{it.value}</span>
            <span className="v3-proof-label">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProofBarEN;