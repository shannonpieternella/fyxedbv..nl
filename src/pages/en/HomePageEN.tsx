import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/LandingV2.css';
import '../../styles/LandingV3.css';
import { ScrollProvider } from '../../components/v3/ScrollProvider';
import HeroV3EN from '../../components/en/HeroV3EN';
import ProofBarEN from '../../components/en/ProofBarEN';
import ProblemsV3EN from '../../components/en/ProblemsV3EN';
import CapabilitiesV3EN from '../../components/en/CapabilitiesV3EN';
import ComparisonV3EN from '../../components/en/ComparisonV3EN';
import LiveDemoV3EN from '../../components/en/LiveDemoV3EN';
import CalculatorV3EN from '../../components/en/CalculatorV3EN';
import ProblemsAndSolutionsEN from '../../components/en/ProblemsAndSolutionsEN';
import ServicesEN from '../../components/en/ServicesEN';
import CaseStudyEN from '../../components/en/CaseStudyEN';
import BusinessModelEN from '../../components/en/BusinessModelEN';
import CallToActionEN from '../../components/en/CallToActionEN';

const HomePageEN: React.FC = () => {
  const location = useLocation();

  // Scroll to a section when arriving at /#section or when hash changes
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash) {
      // slight delay to ensure sections are rendered
      const t = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <ScrollProvider>
      {/* English Landing V3 */}
      <HeroV3EN />
      <ProofBarEN />
      <ProblemsV3EN />
      <CapabilitiesV3EN />
      <ComparisonV3EN />
      <LiveDemoV3EN />
      <CalculatorV3EN />

      {/* English Services and Problems */}
      <ProblemsAndSolutionsEN />
      <ServicesEN />
      <CaseStudyEN />
      <BusinessModelEN />
      <CallToActionEN />
    </ScrollProvider>
  );
};

export default HomePageEN;