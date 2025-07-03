import React from "react";
import { NavLink, useParams } from "react-router-dom";

import HolidaysData from "../assets/data/HolidaysData";
import BulletinData from "../assets/data/BulletinData";
import circularsData from "../assets/data/CircularData";
import McxHolidaysData from "../assets/data/McxHolidaysData";
import SettlementHolidaysData from "../assets/data/SettlementHolidaysData";

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

const DataRow = ({ cols }) => (
  <tr>
    {cols.map((col, idx) => (
      <td key={idx} className="p-2 border">
        {col}
      </td>
    ))}
  </tr>
);

const Table = ({ headers, rows }) => (
  <table className="min-w-full border mt-5">
    <thead className="bg-gray-200">
      <tr>
        {headers.map((header, idx) => (
          <th key={idx} className="p-2 border">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, idx) => (
        <DataRow key={idx} cols={row} />
      ))}
    </tbody>
  </table>
);

const TextWithLabel = ({ date, title, exchange }) => (
  <div className="flex items-start gap-4">
    <div>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-blue-600 font-medium text-md hover:underline cursor-pointer">
        {title}
      </p>
    </div>
    {exchange && (
      <span
        className={`px-2 py-0.5 text-xs h-fit mt-1 rounded ${
          exchange === "BSE"
            ? "bg-blue-100 text-blue-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {exchange}
      </span>
    )}
  </div>
);

const Market = () => {
  const { tabId } = useParams();
  const heading = tabHeadings[tabId];

  return (
    
    <div className="max-w-6xl mx-auto px-4 py-10 mt-14">
      <h1 className="text-5xl text-center mb-6">{heading}</h1>

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
            <Table
              headers={["Day", "Date", "Holiday", "Exchanges"]}
              rows={HolidaysData.map((item) => [
                item.day,
                item.date,
                item.holiday,
                item.exchanges.join(", "),
              ])}
            />

            <h3 className="text-3xl text-center mt-8">Settlement Holidays</h3>
            <Table
              headers={["Day", "Date", "Holiday", "Type"]}
              rows={SettlementHolidaysData.map((item) => [
                item.day,
                item.date,
                item.holiday,
                item.type,
              ])}
            />

            <h3 className="text-3xl text-center mt-8">MCX Holidays</h3>
            <Table
              headers={["Day", "Date", "Holiday", "Type"]}
              rows={McxHolidaysData.map((item) => [
                item.day,
                item.date,
                item.holiday,
                item.exchange,
              ])}
            />

            <p className="text-center text-cyan-500 text-xl cursor-pointer mt-5">
              What is a settlement holiday?
            </p>
          </>
        )}
        

        {(tabId === "bulletin" || tabId === "circulars" || tabId === "disclosures") && (
          <div className="space-y-6">
            {(tabId === "bulletin" ? BulletinData : circularsData).map(
              (item, index) => (
                <TextWithLabel
                  key={index}
                  date={item.date}
                  title={item.title}
                  exchange={tabId === "bulletin" ? null : item.exchange}
                />
              )
            )}
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

export default Market;
