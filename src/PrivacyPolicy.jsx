import React from "react";

const PrivacyPolicy = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center py-20 text-red-600">
        No privacy policy data provided.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="py-16 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          Privacy Policy
        </h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {data.map((section) => (
          <section key={section.section_id}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {section.section_name}
            </h2>

            <div className="space-y-6">
              {section.points.map((pt) => (
                <div key={pt.id} className="text-gray-700 leading-relaxed">
                  {pt.sub_name ? (
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {pt.sub_name}
                      </h3>
                      <div className="ml-4 space-y-3 mt-2">
                        {pt.sub_points &&
                          pt.sub_points.map((sub) => (
                            <p key={sub.id} className="relative pl-8">
                              {" "}
                              {sub.content}
                            </p>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <p className="relative pl-8">
                      <span className="absolute left-0 font-medium text-gray-800">
                      </span>{" "}
                      {pt.content}
                    </p>
                  )}

                  {pt.sub_points && Array.isArray(pt.sub_points) && !pt.sub_name && (
                    <ul className="ml-8 mt-2 list-disc text-gray-600 space-y-1">
                      {pt.sub_points.map((sub) => (
                        <li key={sub.id}>
                            {sub.content}
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

export default PrivacyPolicy;
