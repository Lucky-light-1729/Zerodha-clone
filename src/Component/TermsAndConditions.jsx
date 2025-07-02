import React from "react";

const TermsAndConditions = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center py-20 text-red-600">
        No terms & conditions data provided.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-16 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-800">
          Terms and Conditions
        </h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {data.map((section) => (
          <section key={section.section_id} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {section.section_id}. {section.section_name}
            </h2>

            <div className="space-y-6">
              {section.points.map((pt) => (
                <div key={pt.id} className="pl-8 relative text-gray-700 leading-7">
                  <span className="absolute left-0 top-0 font-medium text-gray-800">
                    {pt.id}
                  </span>{" "}
                  {typeof pt.content === "string" ? (
                    pt.content
                  ) : (
                    <div className="ml-6 space-y-2">
                      {pt.content.map((sub, idx) => (
                        <p key={idx} className="text-gray-600">
                          {sub}
                        </p>
                      ))}
                    </div>
                  )}

                  {pt.subpoints && Array.isArray(pt.subpoints) && (
                    <ul className="ml-6 mt-2 list-disc text-gray-600 space-y-1">
                      {pt.subpoints.map((sub) => (
                        <li key={sub.id}>
                          <span className="font-medium">{sub.id}.</span> {sub.content}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TermsAndConditions;
