import React, { createContext, useContext, useState } from 'react';

export type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  // Simple translation function
  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.sales-agents': 'Sales Agents',
    'nav.customer-service': 'Klantenservice',
    'nav.lead-reactivation': 'Lead Reactivatie',
    'nav.contact': 'Contact',
    'nav.demo': 'Plan een demo',

    // Hero V3
    'hero.eyebrow': 'AI‑medewerkers • Inbound & Outbound',
    'hero.title': 'AI‑medewerkers die altijd doorwerken.',
    'hero.subtitle': 'Zij nemen op, bellen terug, kwalificeren en plannen afspraken in — 24/7, consistent en schaalbaar. Zó heeft u de voordelen van een topmedewerker, zonder de nadelen van een menselijke FTE.',
    'hero.cta.primary': 'Plan een demo',
    'hero.cta.secondary': 'Ontdek onze diensten',
    'hero.chip.inbound': 'Inbound calls',
    'hero.chip.outbound': 'Outbound calls',
    'hero.chip.qualification': 'Lead kwalificatie',
    'hero.chip.scheduling': 'Afspraakplanning',

    // Proof Bar
    'proof.reactivation': 'heractivatie van oude klanten',
    'proof.availability': 'beschikbaar zonder pauzes',
    'proof.satisfaction': 'klanttevredenheid',

    // Problems V3
    'problems.title': 'Uw klanten verdienen meer dan een voicemail.',
    'problems.email': 'E-mails verdwijnen in overvolle inboxen',
    'problems.sms': "SMS'jes worden steeds vaker genegeerd",
    'problems.phone': 'Telefonische bereikbaarheid is beperkt tot kantooruren',
    'problems.contact': 'Maar persoonlijk contact maakt nog altijd het verschil',
    'problems.solution.title': 'Onze AI-oplossing',
    'problems.solution.desc': 'Continue, professionele communicatie met uw klanten - 24/7 beschikbaar, altijd vriendelijk en nooit een gemiste kans.',
    'problems.badge.inbound': 'Inbound support',
    'problems.badge.outbound': 'Outbound follow-ups',
    'problems.badge.qualification': 'Realtime kwalificatie',
    'problems.badge.connect': 'Direct doorverbinden',

    // Call to Action
    'cta.title': 'Klaar om klanten terug te winnen met AI?',
    'cta.subtitle': 'Ontdek hoe Fyxed BV uw bedrijf kan helpen groeien met AI-gestuurde klantenservice en sales.',
    'cta.button': 'Plan een demo met Fyxed',
    'cta.benefit.time': '30 minuten demo',
    'cta.benefit.obligation': 'Geen verplichtingen',
    'cta.benefit.result': 'Direct resultaat zichtbaar',
    'cta.demo.header': 'Live Demo',
    'cta.demo.online': 'Online',
    'cta.demo.calls': 'Gesprekken',
    'cta.demo.conversion': 'Conversie',
    'cta.demo.revenue': 'Omzet',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.sales-agents': 'Sales Agents',
    'nav.customer-service': 'Customer Service',
    'nav.lead-reactivation': 'Lead Reactivation',
    'nav.contact': 'Contact',
    'nav.demo': 'Schedule a demo',

    // Hero V3
    'hero.eyebrow': 'AI Employees • Inbound & Outbound',
    'hero.title': 'AI employees that work around the clock.',
    'hero.subtitle': 'They answer calls, call back, qualify leads, and schedule appointments — 24/7, consistent and scalable. Get all the benefits of a top employee, without the drawbacks of human FTEs.',
    'hero.cta.primary': 'Schedule a demo',
    'hero.cta.secondary': 'Discover our services',
    'hero.chip.inbound': 'Inbound calls',
    'hero.chip.outbound': 'Outbound calls',
    'hero.chip.qualification': 'Lead qualification',
    'hero.chip.scheduling': 'Appointment scheduling',

    // Proof Bar
    'proof.reactivation': 'old customer reactivation',
    'proof.availability': 'available without breaks',
    'proof.satisfaction': 'customer satisfaction',

    // Problems V3
    'problems.title': 'Your customers deserve more than a voicemail.',
    'problems.email': 'Emails disappear in overcrowded inboxes',
    'problems.sms': 'Text messages are increasingly ignored',
    'problems.phone': 'Phone availability is limited to office hours',
    'problems.contact': 'But personal contact still makes all the difference',
    'problems.solution.title': 'Our AI solution',
    'problems.solution.desc': 'Continuous, professional communication with your customers - available 24/7, always friendly, and never a missed opportunity.',
    'problems.badge.inbound': 'Inbound support',
    'problems.badge.outbound': 'Outbound follow-ups',
    'problems.badge.qualification': 'Real-time qualification',
    'problems.badge.connect': 'Direct transfer',

    // Call to Action
    'cta.title': 'Ready to win back customers with AI?',
    'cta.subtitle': 'Discover how Fyxed BV can help your business grow with AI-driven customer service and sales.',
    'cta.button': 'Schedule a demo with Fyxed',
    'cta.benefit.time': '30-minute demo',
    'cta.benefit.obligation': 'No obligations',
    'cta.benefit.result': 'Immediate results visible',
    'cta.demo.header': 'Live Demo',
    'cta.demo.online': 'Online',
    'cta.demo.calls': 'Calls',
    'cta.demo.conversion': 'Conversion',
    'cta.demo.revenue': 'Revenue',
  }
};