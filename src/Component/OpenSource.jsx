import React from "react";
import FlossLogo from "../assets/img/floss-fund.png";
import FossUnitedLogo from "../assets/img/floss-united.png";
import OssPledgeLogo from "../assets/img/open-source-pledge.png";

const OpenSourceInitiatives = () => {
  return (
    <main className="py-12 px-6 text-gray-800 mt-6">
      {/* Header */}
      <section className="text-center border-b border-gray-200 pb-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold">Open source initiatives</h1>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto mt-12">
        <p className="text-xl leading-relaxed text-center text-gray-700 px-4">
          At Zerodha, we have always been passionate about contributing to a
          sustainable ecosystem for Free (libre) and Open Source Software (FOSS).
          As one of India's largest stock brokers, our journey has been deeply
          intertwined with FOSS, which has been instrumental in our growth. We've
          relied on FOSS technologies to build and scale our products, business,
          and services.
        </p>
      </section>

      {/* 3-Column Logos + Descriptions */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mt-16 text-left px-4">
        {/* FLOSS */}
        <div>
          <a href="https://floss.fund/" target="_blank" className="inline-block mb-4">
            <img src={FlossLogo} alt="FLOSS logo" className="h-12" />
            
          </a>
          <p className="text-gray-700 mb-3">
            We launched a dedicated fund aimed at providing financial assistance
            to Free/Libre and Open Source Software (FOSS/FLOSS) projects globally,
            with an annual commitment of $1 million.
            <br />
            <a
              href="https://floss.fund/blog/announcing-floss-fund/"
              className="text-blue-600"
              target="_blank"
            >
              Read more.
            </a>
          </p>
          <a
            href="https://dir.floss.fund/"
            className="text-blue-600 inline-block mt-1"
            target="_blank"
          >
            Recent projects →
          </a>
          <br />
          <a
            href="https://floss.fund/blog/"
            className="text-blue-600 inline-block mt-1"
            target="_blank"
          >
            Blog →
          </a>
        </div>

        {/* FOSS United */}
        <div>
          <a href="https://fossunited.org/" target="_blank" className="inline-block mb-4">
            <img src={FossUnitedLogo} alt="FOSS United logo" className="h-12" />
          </a>
          <p className="text-gray-700">
            We co-founded FOSS United with a mission to promote open-source growth
            in India through financial contributions and fostering community
            collaboration.
          </p>
        </div>

        {/* OSS Pledge */}
        <div>
          <a
            href="https://opensourcepledge.com/members/zerodha/"
            target="_blank"
            className="inline-block mb-4"
          >
            <img src={OssPledgeLogo} alt="Open Source Pledge logo" className="h-12" />
          </a>
          <p className="text-gray-700">
            By joining the Open Source Pledge and sharing our journey, we hope to
            inspire other companies to take similar steps. Supporting the open
            source projects we rely on is not just a responsibility; it's an
            opportunity to contribute to a sustainable and innovative future for
            the tech industry.
            <br />
            <a
              href="https://floss.fund/blog/open-source-pledge-2024/"
              className="text-blue-600"
              target="_blank"
            >
              Read more.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default OpenSourceInitiatives;
