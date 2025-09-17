import React from 'react';
import '../../styles/LandingV3.css';

const ComparisonV3: React.FC = () => {
  return (
    <section id="ai-vs-human" className="v3-compare">
      <div className="v3-container">
        <h2 className="v3-section-title">AI‑medewerker vs. menselijke medewerker</h2>
        <p className="v3-section-sub">Beide lossen klantcontact op. Alleen werkt de AI‑medewerker 24/7 door, schaalt in seconden en blijft altijd consequent.</p>

        <div className="v3-compare-grid">
          <div className="v3-col">
            <div className="v3-badge-title">AI‑medewerker (Fyxed)</div>
            <ul className="v3-list">
              <li><i/> 24/7 bereikbaar — geen pauzes, geen wachtrijen</li>
              <li><i/> Consistente kwaliteit en tone‑of‑voice</li>
              <li><i/> Leert scripts snel; updates in minuten live</li>
              <li><i/> Schaalbaar: 10 → 10.000 calls zonder extra werving</li>
              <li><i/> Integreert met agenda/CRM/telefonie</li>
              <li><i/> Kostenefficiënt: betaalt voor resultaten en gebruik</li>
            </ul>
          </div>

          <div className="v3-col dim">
            <div className="v3-badge-title">Menselijke medewerker</div>
            <ul className="v3-list">
              <li><i/> Werkt uren; afwezigheid/ziekte/feestdagen</li>
              <li><i/> Variabele kwaliteit, afhankelijk van persoon/dag</li>
              <li><i/> Inwerken en verloop kosten tijd en geld</li>
              <li><i/> Schalen vraagt werving, training en management</li>
              <li><i/> Handmatige notities/afspraken kosten extra tijd</li>
              <li><i/> Vaste loonkosten + overhead</li>
            </ul>
          </div>
        </div>

        <div className="v3-compare-foot">
          <div className="v3-foot-card">
            <div>
              <strong>Samengevat:</strong> onze AI‑medewerkers voelen aan als top‑service, zijn altijd beschikbaar en leveren voorspelbare resultaten.
            </div>
            <a className="btn-apple btn-apple-primary" href="#cta">Plan een demo</a>
          </div>
          <p className="v3-disclaimer">Prijzen en resultaten verschillen per bedrijf; we bespreken dit tijdens de demo.</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonV3;

