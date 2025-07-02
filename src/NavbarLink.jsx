import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

function NavbarLink() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Navbar />} />
                {/* 
                <Route path="/signup" element={<TermsPage />} /> 
                <Route path="/about" element={<TermsPage />} /> 
                <Route path="/products" element={<TermsPage />} /> 
                <Route path="/pricing" element={<TermsPage />} /> 
                <Route path="/support" element={<TermsPage />} /> 

                <Route path="/calculators" element={<TermsPage />} /> 
                <Route path="/brokerage-calculator" element={<TermsPage />} /> 
                <Route path="/margin-calculator" element={<TermsPage />} /> 
                <Route path="/sip-calculator" element={<TermsPage />} />

                <Route path="/blog" element={<TermsPage />} /> 
                <Route path="/circulars" element={<TermsPage />} /> 
                <Route path="/ipos" element={<TermsPage />} /> 
                <Route path="/markets" element={<TermsPage />} /> 
                
                <Route path="/varsity" element={<TermsPage />} /> 
                <Route path="/trading-qa" element={<TermsPage />} /> 
                */}
            </Routes>
        </div>
    );
}
export default NavbarLink