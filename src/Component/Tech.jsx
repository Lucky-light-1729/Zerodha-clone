import React from "react";
import data from "../assets/data/TechData.json";

const BlogCard = ({ title, link, pubDate, description }) => {
  const formattedDate = new Date(pubDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-md transition duration-300">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-blue-900 hover:underline">
        <a href={link} target="_self" rel="noopener noreferrer">
          {title}
        </a>
      </h2>

      {/* Date */}
      <div className="text-sm text-gray-500 mt-1">{formattedDate}</div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mt-4 text-[15px]">{description}</p>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="bg-[#e8e8dd] min-h-screen py-10 px-6 mt-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light leading-snug text-black">
          We build <span className="font-semibold">technology at Zerodha,</span><br />
          India&apos;s largest stock broker.
        </h1>
        <div className="h-1 mt-4 w-full max-w-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500" />
      </div>

      {/* Blog Posts */}
      <div className="max-w-3xl mx-auto space-y-8">
        {data.items.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
