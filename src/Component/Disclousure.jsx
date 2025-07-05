// src/pages/Disclosure.jsx
import React from 'react';
import disclosureContent from '../assets/data/DisclousureContent';

const Disclosure = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">Disclosure</h1>

      {disclosureContent.map(({ id, text }) => (
        <p key={id} className="mb-4">
           {id === 12 && (
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              No Partnership or Agency
            </h2>
            
          )}
          {text}
        </p>
      ))}
      {disclosureContent.map(({ id, type, text, url }) => {
        if (type === 'heading') {
          return (
            <h2 key={id} className="text-xl font-semibold mt-6 mb-2">
              {text}
            </h2>
          );
        }

        if (type === 'link') {
          return (
            <p key={id} className="mb-2">
              <a href={url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            </p>
          );
        }

        return (
          <p key={id} className="mb-4">
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default Disclosure;
