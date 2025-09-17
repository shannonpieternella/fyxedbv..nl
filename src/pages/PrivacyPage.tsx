import React from 'react';
import { motion } from 'framer-motion';
import '../styles/LegalPage.css';

const PrivacyPage: React.FC = () => {
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
            <h1 className="legal-hero-title">Privacybeleid</h1>
            <p className="legal-hero-subtitle">
              Uw privacy is belangrijk voor ons. Lees hoe wij uw gegevens beschermen en gebruiken.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-content-container">
          <div className="legal-text">
            <p><strong>Laatst bijgewerkt:</strong> December 2024</p>

            <h2>1. Algemeen</h2>
            <p>
              Fyxed BV ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen
              van uw persoonlijke gegevens. Dit privacybeleid beschrijft hoe wij uw informatie verzamelen,
              gebruiken en beschermen wanneer u onze diensten gebruikt.
            </p>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <p>Wij kunnen de volgende categorieën van persoonlijke gegevens verzamelen:</p>
            <ul>
              <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsinformatie (bedrijfsnaam, functietitel, sector)</li>
              <li>Gebruiksgegevens van onze website en diensten</li>
              <li>Communicatiegegevens (gesprekken, e-mails, berichten)</li>
            </ul>

            <h2>3. Hoe gebruiken wij uw gegevens?</h2>
            <p>Wij gebruiken uw persoonlijke gegevens voor:</p>
            <ul>
              <li>Het leveren van onze AI-diensten</li>
              <li>Klantenservice en ondersteuning</li>
              <li>Verbetering van onze diensten</li>
              <li>Marketing en communicatie (met uw toestemming)</li>
              <li>Naleving van wettelijke verplichtingen</li>
            </ul>

            <h2>4. Gegevens delen</h2>
            <p>
              Wij verkopen uw persoonlijke gegevens niet aan derden. Wij kunnen uw gegevens alleen delen
              met vertrouwde partners die ons helpen onze diensten te leveren, en alleen onder strikte
              vertrouwelijkheidsovereenkomsten.
            </p>

            <h2>5. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens
              te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
            </p>

            <h2>6. Uw rechten</h2>
            <p>Onder de AVG heeft u de volgende rechten:</p>
            <ul>
              <li>Recht op toegang tot uw persoonlijke gegevens</li>
              <li>Recht op rectificatie of verwijdering</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op overdraagbaarheid van gegevens</li>
              <li>Recht van bezwaar tegen verwerking</li>
            </ul>

            <h2>7. Contact</h2>
            <p>
              Voor vragen over dit privacybeleid of uw persoonlijke gegevens kunt u contact met ons
              opnemen via:
            </p>
            <p>
              <strong>Adres:</strong> [Uw bedrijfsadres]<br/>
              <strong>Telefoon:</strong> +31 (970) 102 50463
            </p>

            <h2>8. Wijzigingen</h2>
            <p>
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wij zullen u op de hoogte stellen
              van belangrijke wijzigingen via onze website of per e-mail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
