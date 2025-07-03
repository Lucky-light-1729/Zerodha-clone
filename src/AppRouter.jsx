// src/AppRouter.js
import React from 'react';
import { Routes, Route /*, Navigate */ } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './footer';

// ----- Ready‑to‑use pages -----
import HomePage from './Component/Home';  
import TermsPage from './Component/Terms';
import PrivacyPage from './Component/privacy';
import Policies from './Component/Policies';
import Disclosure from './Component/Disclousure';
import InvestorAttention from './Component/InvestorAttention';
import MarketHoliday from './Component/Market-holiday';
import OpenSourceInitiatives from './Component/OpenSource';
import SectorList from './Component/sectors';
import EconomicCalendar from './Component/EconomicCalendar';
import ZerodhaTech from './Component/Tech'
function AppRouter() {
  return (
    <>
      {/* Always‑visible navigation */}
      <Navbar />

      <Routes>
        {/* ---------- PRIMARY / ROOT ---------- */}
        <Route path="/" element={<HomePage />} />

        {/* ---------- FOOTER SECTION (active) ---------- */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/investor-attention" element={<InvestorAttention />} />
        <Route path="/market-holidays" element={<MarketHoliday />} />

        {/* ---------- FOOTER LINKS ---------- */}
        {/*
        <Route path="/investor-charter" element={<TermsPage />} />

        <Route path="/open-account" element={<TermsPage />} />
        <Route path="/open-account/minor" element={<TermsPage />} />
        <Route path="/open-account/nri" element={<TermsPage />} />
        <Route path="/commodities" element={<TermsPage />} />
        <Route path="/dematerialise" element={<TermsPage />} />
        <Route path="/fund-transfer" element={<TermsPage />} />
        <Route path="/mtf" element={<TermsPage />} />
        <Route path="/refer" element={<TermsPage />} />

        <Route path="/contact" element={<TermsPage />} />
        <Route path="/support" element={<TermsPage />} />
        <Route path="/support/how-to-complain" element={<TermsPage />} />
        <Route path="/support/complaint-status" element={<TermsPage />} />
        <Route path="/bulletin" element={<TermsPage />} />
        <Route path="/circulars" element={<TermsPage />} />
        <Route path="/blog" element={<TermsPage />} />
        <Route path="/downloads" element={<TermsPage />} />

        <Route path="/about" element={<TermsPage />} />
        <Route path="/philosophy" element={<TermsPage />} />
        <Route path="/media" element={<TermsPage />} />
        <Route path="/careers" element={<TermsPage />} />
        <Route path="/csr" element={<TermsPage />} />
        */}
        <Route path="/tech" element={<ZerodhaTech />} />
        <Route path="/open-source" element={<OpenSourceInitiatives />} />
        {/*
        <Route path="/ipos" element={<TermsPage />} />
        <Route path="/charges" element={<TermsPage />} />
        */} 
        <Route path="/economic-calendar" element={<EconomicCalendar />} />
        {/*
        <Route path="/calculators" element={<TermsPage />} />
        <Route path="/markets" element={<TermsPage />} />
        */} 
        <Route path="/sectors" element={<SectorList />} />
        

        {/* ----------NAVBAR LINKS ---------- */}
        {/*
        <Route path="/signup" element={<TermsPage />} />
        <Route path="/products" element={<TermsPage />} />
        <Route path="/pricing" element={<TermsPage />} />

        <Route path="/brokerage-calculator" element={<TermsPage />} />
        <Route path="/margin-calculator" element={<TermsPage />} />
        <Route path="/sip-calculator" element={<TermsPage />} />

        <Route path="/varsity" element={<TermsPage />} />
        <Route path="/trading-qa" element={<TermsPage />} />
        */}
      </Routes>

      {/* Always‑visible footer */}
      <Footer />
    </>
  );
}

export default AppRouter;
