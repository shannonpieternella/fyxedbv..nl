import React from 'react';
import '../../styles/LandingV3.css';
import { ScrollProvider } from '../../components/v3/ScrollProvider';
import HeroV3EN from '../../components/en/HeroV3EN';
import CallToActionEN from '../../components/en/CallToActionEN';

const HomePageEN: React.FC = () => {
  return (
    <ScrollProvider>
      {/* English Landing Page */}
      <HeroV3EN />
      <CallToActionEN />
    </ScrollProvider>
  );
};

export default HomePageEN;