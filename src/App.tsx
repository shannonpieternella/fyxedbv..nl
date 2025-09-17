import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LeadReactivatiePage from './pages/LeadReactivatiePage';
import KlantenservicePage from './pages/KlantenservicePage';
import SalesAgentsPage from './pages/SalesAgentsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-lead-reactivatie" element={<LeadReactivatiePage />} />
          <Route path="/ai-klantenservice" element={<KlantenservicePage />} />
          <Route path="/ai-sales-agents" element={<SalesAgentsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;