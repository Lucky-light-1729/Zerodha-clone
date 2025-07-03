import React from "react";
import NriImg from "./images/nri-landing.png";

const Nri = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 mt-20">
     
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Open an NRI demat account
          </h1>
          <p className="text-gray-700">
            You can now open a non-PIS account to invest in equity, convertible
            preference shares, convertible debenture, warrants, or mutual fund
            units.
          </p>
          <p className="text-gray-700">
            Or you can open a PIS account by approaching one of our{" "}
            <a href="https://support.zerodha.com/category/account-opening/nri-account-opening/oq-nri/articles/which-banks-can-nris-link-with-their-zerodha-account" className="text-blue-600 no-underline">
              partner banks
            </a>{" "}
            to obtain the Portfolio Investment Scheme (PIS) permission letter.
          </p>
          <p className="text-gray-700">
            Check our{" "}
            <a href="https://support.zerodha.com/category/account-opening/nri-account-opening/process-nri/articles/how-to-open-an-account-as-a-nri" className="text-blue-600 no-underline">
              Support Portal
            </a>{" "}
            to know about the documentation or raise a ticket so our team can
            help.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={NriImg}
            alt="NRI illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Section 2: Pricing Boxes */}
      <div className="flex justify-content items-center flex-wrap">
        <div className="grid grid-cols-2 border mt-20 w-full md:w-[450px] mx-auto rounded overflow-hidden text-center text-xl">
          <div className="border-r px-6 py-8">
            <p className="font-semibold text-2xl">0.5%</p>
            <p className="text-gray-600 mt-2">Equity delivery</p>
          </div>
          <div className="px-6 py-8">
            <p className="font-semibold text-2xl">₹100</p>
            <p className="text-gray-600 mt-2">Futures & Options</p>
          </div>
        </div>

        {/* Section 3: Notes */}
        <div className="mt-20 text-gray-700 text-sm space-y-2 max-w-3xl mx-auto ">
          <ul className="list-disc ml-5 space-y-2 text-base">
            <li>
              Equity delivery orders placed from a non-PIS <br /> account are
              charged a brokerage of 0.5% or ₹100,
              <br /> whichever is lower.
            </li>
            <li>
              Equity delivery orders placed from a PIS account <br /> are
              charged a brokerage of 0.5% or ₹200, <br /> whichever is lower.
            </li>
            <li>
              Derivative orders are charged at flat ₹100 per order.
              <br />{" "}
              <a href="https://support.zerodha.com/category/account-opening/nri-account-opening/nri-charges/articles/what-are-the-charges-for-nri-accounts" className="text-blue-600 no-underline inline-block  mt-1">
                Read more.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nri;
