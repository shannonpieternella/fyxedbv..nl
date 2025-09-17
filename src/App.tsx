import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LeadReactivatiePage from './pages/LeadReactivatiePage';
import KlantenservicePage from './pages/KlantenservicePage';
import SalesAgentsPage from './pages/SalesAgentsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
// English pages
import HomePageEN from './pages/en/HomePageEN';
import LeadReactivatiePageEN from './pages/en/LeadReactivatiePageEN';
import KlantenservicePageEN from './pages/en/KlantenservicePageEN';
import SalesAgentsPageEN from './pages/en/SalesAgentsPageEN';
import PrivacyPageEN from './pages/en/PrivacyPageEN';
import TermsPageEN from './pages/en/TermsPageEN';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Dutch routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-lead-reactivatie" element={<LeadReactivatiePage />} />
          <Route path="/ai-klantenservice" element={<KlantenservicePage />} />
          <Route path="/ai-sales-agents" element={<SalesAgentsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* English routes */}
          <Route path="/en" element={<HomePageEN />} />
          <Route path="/en/ai-lead-reactivation" element={<LeadReactivatiePageEN />} />
          <Route path="/en/ai-customer-service" element={<KlantenservicePageEN />} />
          <Route path="/en/ai-sales-agents" element={<SalesAgentsPageEN />} />
          <Route path="/en/privacy" element={<PrivacyPageEN />} />
          <Route path="/en/terms" element={<TermsPageEN />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;