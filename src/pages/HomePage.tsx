import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/LandingV2.css';
import '../styles/LandingV3.css';
import { ScrollProvider } from '../components/v3/ScrollProvider';
import HeroV3 from '../components/v3/HeroV3';
import ProofBar from '../components/v3/ProofBar';
import ProblemsV3 from '../components/v3/ProblemsV3';
import CapabilitiesV3 from '../components/v3/CapabilitiesV3';
import LiveDemoV3 from '../components/v3/LiveDemoV3';
import CalculatorV3 from '../components/v3/CalculatorV3';
import ProblemSolution from '../components/ProblemSolution';
import ProblemsAndSolutions from '../components/ProblemsAndSolutions';
import Services from '../components/Services';
import CaseStudy from '../components/CaseStudy';
import BusinessModel from '../components/BusinessModel';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
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
      {/* Landing V3 */}
      <HeroV3 />
      <ProofBar />
      <ProblemsV3 />
      <CapabilitiesV3 />
      <LiveDemoV3 />
      <CalculatorV3 />

      {/* Restore original sections to keep all existing text */}
      {/* Removed duplicate ProblemSolution to avoid repeating the same content; ProblemsV3 covers it */}
      <ProblemsAndSolutions />
      <Services />
      <CaseStudy />
      <BusinessModel />
      <CallToAction />
    </ScrollProvider>
  );
};

export default HomePage;
