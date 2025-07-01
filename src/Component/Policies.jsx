import React from 'react';
import policiesData from './policiesData';

const Policies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Policies and Procedures</h1>

      {policiesData.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>

          {/* Render HTML content safely (e.g. <br>, \n) */}
          {section.content && (
            <div
              className="text-sm leading-relaxed text-justify mb-4"
              dangerouslySetInnerHTML={{
                __html: section.content.replace(/\n/g, '<br />'),
              }}
            />
          )}

          {/* Render sub-sections */}
          {section.subSections &&
            section.subSections.map((sub, subIndex) => (
              <div key={subIndex} className="mb-6">
                {/* Only render title if not empty */}
                {sub.title && <h3 className="text-lg font-semibold mb-2">{sub.title}</h3>}

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  {sub.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
      <div className="text-center mt-12">
  <ul className="space-y-4 text-blue-800 text-xl font- text-left" >
    <li >
      <a href="https://zerodha.com/policies/csr-policy" className="hover:underline">
        CSR policy
      </a>
    </li>
    <li>
      <a href="https://zerodha.com/policies/nomination-remuneration" className="hover:underline">
        Nomination & remuneration policy
      </a>
    </li>
    <li>
      <a href="https://zerodha.com/policies/voluntary-freezing-policy" className="hover:underline">
        Voluntary Freezing/Blocking of the Online Trading Account Policy
      </a>
    </li>
  </ul>
  <p className="text-sm text-gray-600 mt-6 text-left">Last updated on December 12, 2023</p>
</div>

    </div>
  );
};

export default Policies;

