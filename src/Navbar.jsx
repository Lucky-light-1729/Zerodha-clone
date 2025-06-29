import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {
  FaCalculator, FaGraduationCap, FaChartPie, FaPiggyBank,
} from 'react-icons/fa';
import { MdOutlineApi, MdOutlineSupportAgent } from 'react-icons/md';

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-400 font-bold text-xl">
          <div className="w-4 h-4 bg-blue-400 rotate-45"></div>
          ZERODHA
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-sm">
          <Link to="/signup" className="hover:text-blue-600 text-gray-800 font-medium">Signup</Link>
          <Link to="/about" className="hover:text-blue-600 text-gray-800 font-medium">About</Link>

          {/* Products Dropdown */}
          <div
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            className="relative"
          >
            <span className="hover:text-blue-600 cursor-pointer text-gray-800 font-medium">Products</span>
            {/* You can add mega menu here if needed */}
          </div>

          <Link to="/pricing" className="hover:text-blue-600 text-gray-800 font-medium">Pricing</Link>
          <Link to="/support" className="hover:text-blue-600 text-gray-800 font-medium">Support</Link>

          {/* Hamburger Icon */}
          <div className="cursor-pointer text-xl" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            <FiMenu />
          </div>
        </div>
      </div>

      {/* Hamburger Menu Content */}
      {hamburgerOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50">
          <div className="bg-white rounded-lg w-[1000px] px-10 py-6 shadow-xl border border-gray-200">

            {/* Top Row: Applications */}
            <div className="grid grid-cols-4 gap-6 text-center pb-6 border-b border-gray-200">
              <div className="flex flex-col items-center">
                <FaChartPie className="text-red-500 text-3xl mb-2" />
                <p className="font-semibold text-sm">Kite</p>
                <p className="text-gray-500 text-xs">Trading platform</p>
              </div>
              <div className="flex flex-col items-center">
                <FaPiggyBank className="text-blue-500 text-3xl mb-2" />
                <p className="font-semibold text-sm">Console</p>
                <p className="text-gray-500 text-xs">Backoffice</p>
              </div>
              <div className="flex flex-col items-center">
                <MdOutlineApi className="text-black text-3xl mb-2" />
                <p className="font-semibold text-sm">Kite Connect</p>
                <p className="text-gray-500 text-xs">Trading APIs</p>
              </div>
              <div className="flex flex-col items-center">
                <FaPiggyBank className="text-yellow-500 text-3xl mb-2" />
                <p className="font-semibold text-sm">Coin</p>
                <p className="text-gray-500 text-xs">Mutual funds</p>
              </div>
            </div>

            {/* Bottom Row: Info Sections */}
            <div className="grid grid-cols-3 gap-8 pt-6 text-left text-sm">
              {/* Utilities */}
              <div>
                <h4 className="font-semibold mb-3 ml-20">Utilities</h4>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-center gap-2 hover:text-blue-600"><FaCalculator /> Calculators</li>
                  <li className="flex items-center gap-2 hover:text-blue-600"><FaCalculator /> Brokerage calculator</li>
                  <li className="flex items-center gap-2 hover:text-blue-600"><FaCalculator /> Margin calculator</li>
                  <li className="flex items-center gap-2 hover:text-blue-600"><FaCalculator /> SIP calculator</li>
                </ul>
              </div>
 
              {/* Updates */}
              <div>
                <h4 className="font-semibold mb-3 ml-20">Updates</h4>
                <ul className="space-y-2 pl-16">
                  <li className="hover:text-blue-600">Z-Connect blog</li>
                  <li className="hover:text-blue-600">Circulars / Bulletin</li>
                  <li className="hover:text-blue-600">IPOs</li>
                  <li className="hover:text-blue-600">Markets</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-semibold mb-3 ml-20">Education</h4>
                <ul className="space-y-2 pl-20">
                  <li className="flex items-center gap-2 hover:text-blue-600"><FaGraduationCap /> Varsity</li>
                  <li className="flex items-center gap-2 hover:text-blue-600"><MdOutlineSupportAgent /> Trading Q&A</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

