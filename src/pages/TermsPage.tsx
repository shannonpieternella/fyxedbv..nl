import React from 'react';
import { motion } from 'framer-motion';
import '../styles/LegalPage.css';

const TermsPage: React.FC = () => {
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
            <h1 className="legal-hero-title">Algemene Voorwaarden</h1>
            <p className="legal-hero-subtitle">
              De voorwaarden die van toepassing zijn op het gebruik van onze diensten.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-content-container">
          <div className="legal-text">
            <p><strong>Laatst bijgewerkt:</strong> December 2024</p>

            <h2>1. Definities</h2>
            <p>
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul>
              <li><strong>Fyxed BV:</strong> de vennootschap die deze diensten aanbiedt</li>
              <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die gebruik maakt van onze diensten</li>
              <li><strong>Diensten:</strong> alle AI-gestuurde communicatie- en automatiseringsdiensten</li>
            </ul>

            <h2>2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en
              leveringen van diensten door Fyxed BV, tenzij schriftelijk anders is overeengekomen.
            </p>

            <h2>3. Aanbiedingen en overeenkomsten</h2>
            <ul>
              <li>Alle aanbiedingen zijn vrijblijvend en geldig voor 30 dagen</li>
              <li>Overeenkomsten komen tot stand door schriftelijke bevestiging</li>
              <li>Wijzigingen zijn alleen geldig indien schriftelijk overeengekomen</li>
            </ul>

            <h2>4. Dienstverlening</h2>
            <p>
              Fyxed BV levert AI-gestuurde diensten voor klantenservice, lead management en
              verkoopondersteining. Wij streven naar optimale beschikbaarheid maar kunnen geen
              100% uptime garanderen.
            </p>

            <h2>5. Prijzen en betaling</h2>
            <ul>
              <li>Alle prijzen zijn exclusief BTW tenzij anders vermeld</li>
              <li>Betaling geschiedt binnen 14 dagen na factuurdatum</li>
              <li>Bij laate betaling kunnen rente en incassokosten in rekening worden gebracht</li>
            </ul>

            <h2>6. Geheimhouding</h2>
            <p>
              Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie
              die zij tijdens de samenwerking verkrijgen.
            </p>

            <h2>7. Aansprakelijkheid</h2>
            <p>
              De aansprakelijkheid van Fyxed BV is beperkt tot het bedrag dat in het betreffende
              geval door onze verzekeraar wordt uitgekeerd, of bij gebreke daarvan tot het
              factuurbedrag van de betreffende opdracht.
            </p>

            <h2>8. Intellectueel eigendom</h2>
            <p>
              Alle intellectuele eigendomsrechten op onze software, algoritmen en systemen
              berusten bij Fyxed BV.
            </p>

            <h2>9. Opzegging</h2>
            <p>
              Overeenkomsten kunnen door beide partijen worden opgezegd met inachtneming van
              een opzegtermijn van één maand.
            </p>

            <h2>10. Toepasselijk recht</h2>
            <p>
              Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden
              voorgelegd aan de bevoegde rechter in Nederland.
            </p>

            <h2>11. Contact</h2>
            <p>
              Voor vragen over deze voorwaarden kunt u contact opnemen via:
            </p>
            <p>
              {/* E-mail temporarily removed at owner's request */}
              <strong>Adres:</strong> [Uw bedrijfsadres]<br/>
              <strong>Telefoon:</strong> +31 (970) 102 50463
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
