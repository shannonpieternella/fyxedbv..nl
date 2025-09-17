import React from 'react';
import '../../styles/LandingV3.css';

const items = [
  { value: '+35%', label: 'heractivatie van oude klanten' },
  { value: '24/7', label: 'beschikbaar zonder pauzes' },
  { value: '95%', label: 'klanttevredenheid' },
];

const ProofBar: React.FC = () => {
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

export default ProofBar;

