import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Icons
import { FiMenu } from "react-icons/fi";
import { FaCalculator, FaGraduationCap, FaChartPie, FaPiggyBank } from "react-icons/fa";
import { MdOutlineApi, MdOutlineSupportAgent } from "react-icons/md";

// ✅ Menu Data Lists

const navLinks = [
  { to: "/signup", label: "Signup" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/support", label: "Support" },
];

const appItems = [
  { icon: FaChartPie, color: "text-red-500", name: "Kite", desc: "Trading platform" },
  { icon: FaPiggyBank, color: "text-blue-500", name: "Console", desc: "Backoffice" },
  { icon: MdOutlineApi, color: "text-black", name: "Kite Connect", desc: "Trading APIs" },
  { icon: FaPiggyBank, color: "text-yellow-500", name: "Coin", desc: "Mutual funds" },
];

const utilities = [
  { to: "/calculators", label: "Calculators" },
  { to: "/brokerage-calculator", label: "Brokerage calculator" },
  { to: "/margin-calculator", label: "Margin calculator" },
  { to: "/sip-calculator", label: "SIP calculator" },
];

const updates = [
  { to: "/blog", label: "Z-Connect blog" },
  { to: "/circulars", label: "Circulars / Bulletin" },
  { to: "/ipos", label: "IPOs" },
  { to: "/economic-calendar", label: "Markets" },
];

const education = [
  { to: "/varsity", label: "Varsity", icon: FaGraduationCap },
  { to: "/trading-qa", label: "Trading Q&A", icon: MdOutlineSupportAgent },
];


// ✅ Component

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setHamburgerOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-400 font-bold text-xl">
          <div className="w-4 h-4 bg-blue-400 rotate-45" />
          ZERODHA
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-sm">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-blue-600 text-gray-800 font-medium"
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            className="cursor-pointer text-xl"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Dropdown Content */}
      {hamburgerOpen && (
        <div
          ref={menuRef}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50"
        >
          <div className="bg-white rounded-lg w-[1000px] px-10 py-6 shadow-xl border border-gray-200 transition-all duration-300 ease-in-out">
            {/* Applications */}
            <div className="grid grid-cols-4 gap-6 text-center pb-6 border-b border-gray-200">
              {appItems.map(({ icon: Icon, color, name, desc }, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Icon className={`${color} text-3xl mb-2`} />
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>

            {/* Info Sections */}
            <div className="grid grid-cols-3 gap-8 pt-6 text-left text-sm">
              {/* Utilities */}
              <div>
                <h4 className="font-semibold mb-3 ml-20">Utilities</h4>
                <ul className="space-y-2 pl-14">
                  {utilities.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} onClick={handleLinkClick} className="flex items-center gap-2 hover:text-blue-600">
                        <FaCalculator /> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Updates */}
              <div>
                <h4 className="font-semibold mb-3 ml-20">Updates</h4>
                <ul className="space-y-2 pl-16">
                  {updates.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} onClick={handleLinkClick} className="hover:text-blue-600">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-semibold mb-3 ml-20">Education</h4>
                <ul className="space-y-2 pl-20">
                  {education.map(({ to, label, icon: Icon }) => (
                    <li key={to}>
                      <Link to={to} onClick={handleLinkClick} className="flex items-center gap-2 hover:text-blue-600">
                        <Icon /> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
