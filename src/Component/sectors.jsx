import React from "react";
import { Link } from "react-router-dom";

import UpArrow from '../assets/img/arrow-top-bright.png'
const sectors = [
  "Agriculture", "Auto ancillary", "Aviation", "Building materials", "Chemicals",
  "Consumer durables", "Diversified", "Education & training", "Energy", "Engineering & capital goods",
  "FMCG", "Fertilizers", "Financial services", "Healthcare", "Logistics", "Media & entertainment",
  "Metals", "Miscellaneous", "Packaging", "Real estate", "Retail", "Services",
  "Software services", "Telecom", "Textiles", "Tourism & hospitality", "Trading"
];

const SectorList = () => {
    const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="px-4 md:px-8 py-10 mt-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sector wise stocks</h1>

        {/* Header info */}
        <div className="text-lg font-semibold text-gray-500 mt-1">27 Sectors</div>
        <p className="text-base text-gray-600 mt-4 mb-8">Browse listed companies organized by industry sector.</p>

        {/* Table */}
        <div className="bg-white border rounded">
          <div className="flex justify-between items-center bg-gray-100 px-4 py-2 font-medium text-gray-700 border-b">
            <div>Sector</div>
            <div className="hidden md:block w-4"></div>
          </div>

          {sectors.map((sector, i) => {
            const href = `/sectors/#`;
            return (
              <Link to={href} key={i} className="block border-b hover:bg-gray-50">
                <div className="flex justify-between items-center px-4 py-3">
                  <div>{sector}</div>
                  <div className="hidden md:block">
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Scroll to top */}
        <div
            onClick={handleScrollToTop}
            className="text-center mt-10 cursor-pointer text-blue-600 hover:underline"
        >
            <div className="inline-flex items-center gap-1 justify-center">
                Scroll to Top
                <img
                    src={UpArrow}
                    alt="top arrow"
                    className="w-4 h-4 inline-block"
                />
            </div>
        </div>
      </div>
    </main>
  );
};

export default SectorList;
