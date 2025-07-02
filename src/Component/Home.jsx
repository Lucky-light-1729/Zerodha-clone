// src/pages/HomePage.jsx
import React from "react";
import data from "../assets/data/HomeData.json";
import Landing from '../assets/img/landing.png'
import Education from '../assets/img/index-education.svg';
import PressLogo from '../assets/img/press-logos.png';
import Exosystem from '../assets/img/ecosystem.png';
const HeroSection = ({ heading, subheading, buttonText, buttonLink }) => (
  <section className="text-center py-16 bg-white">
    <img src={Landing} alt={heading} className="mx-auto max-w-4xl" />
    <h1 className="text-4xl font-semibold mt-8">{heading}</h1>
    <p className="text-lg text-gray-600 mt-4">{subheading}</p>
    <a
      href={buttonLink}
      className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {buttonText}
    </a>
  </section>
);
const InfoSection = ({ heading, features }) => (
  <section className="bg-gray-50 py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-semibold mb-4">{heading}</h2>
        {features
          .filter((f) => !f.image) 
          .map(({ title, description, link }, i) => (
            <div key={i}>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-gray-600 mt-2">
                {description}
                {link && (
                  <>
                    {" "}
                    <a href={link.href} className="text-blue-600 underline">
                      {link.text}
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
      </div>

      {features.some((f) => f.image) && (
        <div className="flex-1">
          {features
            .filter((f) => f.image)
            .map(({href, title }, i) => (
              <a key={i} href={href} className="block relative mx-auto">
                <img
                  src={Exosystem}
                  alt={title}
                  className="w-[720px] h-[500px] object-contain"
                />
              </a>
            ))}
        </div>
      )}
    </div>
  </section>
);

const PressLogoSection = ({link }) => (
  <section className="py-12 bg-white text-center">
    <a href={link}>
      <img src={PressLogo} alt="Press logos" className="mx-auto w-[720px] h-[40px]" />
    </a>
  </section>
);

const PricingSection = ({ heading, description, points, linkText, linkHref }) => (
  <section className="py-16 bg-white px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <p className="text-gray-600 mt-4">{description}</p>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-10">
        {points.map((point, i) => {
          const [price, ...rest] = point.split(" ");
          return (
            <div key={i} className="text-lg text-gray-700">
              <span className="text-orange-500 font-bold text-3xl">{price}</span>
              <br />
              {rest.join(" ")}
            </div>
          );
        })}
      </div>
      <a href={linkHref} className="inline-block mt-6 text-blue-600 hover:underline">
        {linkText} →
      </a>
    </div>
  </section>
);

const EducationSection = ({heading,varsityText,varsityLink,communityText,communityLink,}) => (
  <section className="bg-gray-50 py-16 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <img src={Education} alt="Education" className="max-w-sm mx-auto md:mx-0" />
      <div>
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="text-gray-700 mt-4">
          {varsityText}{" "}
          <a href={varsityLink} className="text-blue-600 underline">
            Varsity
          </a>
        </p>
        <p className="text-gray-700 mt-4">
          {communityText}{" "}
          <a href={communityLink} className="text-blue-600 underline">
            TradingQ&A
          </a>
        </p>
      </div>
    </div>
  </section>
);

const CtaSection = ({ heading, subheading, buttonText, buttonLink }) => (
  <section className="bg-white py-16 text-center px-6">
    <h2 className="text-3xl font-semibold">{heading}</h2>
    <p className="text-gray-700 mt-4">{subheading}</p>
    <a
      href={buttonLink}
      className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {buttonText}
    </a>
  </section>
);

const SECTION_MAP = {
  hero:       HeroSection,
  "info-section": InfoSection,
  "press-logo":   PressLogoSection,
  pricing:    PricingSection,
  education:  EducationSection,
  cta:        CtaSection,
};

export default function HomePage() {
  return (
    <main className="font-sans">
      {data.map((section, idx) => {
        const SectionComponent = SECTION_MAP[section.type];
        return SectionComponent ? (
          <SectionComponent key={idx} {...section} />
        ) : null;
      })}
    </main>
  );
}
