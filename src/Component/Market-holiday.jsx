import React from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  holidaysData,
  settlementHolidaysData,
  mcxHolidaysData,
  bulletinData,
  circular as circularsData,
} from "./MarketContent";

const tabs = [
  { id: "bulletin", label: "Bulletin" },
  { id: "circulars", label: "Circulars" },
  { id: "holiday", label: "Holiday calendar" },
  { id: "disclosures", label: "Disclosures" },
  { id: "updates", label: "Updates" },
];

const tabHeadings = {
  bulletin: "Bulletin",
  circulars: "Circulars",
  holiday: "Stock market holiday calendar for NSE and BSE 2025",
  disclosures: "Disclosures",
  updates: "Updates",
};

const HolidayCalendar = () => {
  const { tabId } = useParams();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-14">
      <h1 className="text-5xl text-center mb-6">
        {tabHeadings[tabId] || "Holiday Calendar"}
      </h1>

      <center>
        <button className="text-center hover:cursor-pointer text-cyan-900 text-xl">
          Subscribe
        </button>
      </center>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 mt-6">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={`/market/${tab.id}`}
            className={({ isActive }) =>
              `px-4 py-2 border ${
                isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 rounded shadow">
        {tabId === "holiday" && (
          <>
            <table className="min-w-full border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Day</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Holiday</th>
                  <th className="p-2 border">Exchanges</th>
                </tr>
              </thead>
              <tbody>
                {holidaysData.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.day}</td>
                    <td className="p-2 border">{item.date}</td>
                    <td className="p-2 border">{item.holiday}</td>
                    <td className="p-2 border">{item.exchanges.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-3xl text-center mt-8">Settlement Holidays</h3>
            <table className="min-w-full border mt-5">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Day</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Holiday</th>
                  <th className="p-2 border">Type</th>
                </tr>
              </thead>
              <tbody>
                {settlementHolidaysData.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.day}</td>
                    <td className="p-2 border">{item.date}</td>
                    <td className="p-2 border">{item.holiday}</td>
                    <td className="p-2 border">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-3xl text-center mt-8">MCX Holidays</h3>
            <table className="min-w-full border mt-5">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Day</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Holiday</th>
                  <th className="p-2 border">Type</th>
                </tr>
              </thead>
              <tbody>
                {mcxHolidaysData.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.day}</td>
                    <td className="p-2 border">{item.date}</td>
                    <td className="p-2 border">{item.holiday}</td>
                    <td className="p-2 border">{item.exchange}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-center text-cyan-500 text-xl cursor-pointer mt-5">
              What is a settlement holiday?
            </p>
          </>
        )}

        {tabId === "bulletin" && (
          <div className="space-y-6">
            {bulletinData.map((item, index) => (
              <div key={index}>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-blue-600 font-medium text-md hover:underline cursor-pointer">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        )}

        {tabId === "circulars" && (
          <div className="space-y-6">
            {circularsData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-blue-600 font-medium text-md hover:underline cursor-pointer">
                    {item.title}
                  </p>
                </div>
                <span
                  className={`px-2 py-0.5 text-xs h-fit mt-1 rounded ${
                    item.exchange === "BSE"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.exchange}
                </span>
              </div>
            ))}
          </div>
        )}

        {tabId === "disclosures" && (
          <div className="space-y-6">
            {circularsData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-blue-600 font-medium text-md hover:underline cursor-pointer">
                    {item.title}
                  </p>
                </div>
                <span
                  className={`px-2 py-0.5 text-xs h-fit mt-1 rounded ${
                    item.exchange === "BSE"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.exchange}
                </span>
              </div>
            ))}
          </div>
        )}

        {tabId === "updates" && (
          <p className="text-center text-blue-600 text-xl">
            Visit:{" "}
            <a
              href="https://zerodha.com/z-connect/updates"
              target="_blank"
              rel="noreferrer"
            >
              Zerodha Updates
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default HolidayCalendar;