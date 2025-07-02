import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './footer'
import TermsPage from './terms'

function FooterLink( ){
  return (
    <div>
        <Routes>
            <Route path="/terms" element={<TermsPage />} />
            {/* 
            <Route path="/policies" element={<TermsPage />} /> 
            <Route path="/privacy" element={<TermsPage />} /> 
            <Route path="/disclosure" element={<TermsPage />} /> 
            <Route path="/investor-attention" element={<TermsPage />} /> 
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
            <Route path="/tech" element={<TermsPage />} />
            <Route path="/open-source" element={<TermsPage />} />

            <Route path="/ipos" element={<TermsPage />} />
            <Route path="/charges" element={<TermsPage />} />
            <Route path="/market-holidays" element={<TermsPage />} />
            <Route path="/economic-calendar" element={<TermsPage />} />
            <Route path="/calculators" element={<TermsPage />} />
            <Route path="/markets" element={<TermsPage />} />
            <Route path="/sectors" element={<TermsPage />} />
            */}

        </Routes>
        <Footer/> 
    </div>
  );
}
 export default FooterLink;