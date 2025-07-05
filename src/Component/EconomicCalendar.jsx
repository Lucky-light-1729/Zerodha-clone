import React, { useState } from "react";
import data from "../assets/data/EconomicCalendar.json";

function EconomicCalendar() {
    const [selectedImportance, setSelectedImportance] = useState(["High", "Medium"]);
    const [selectedRegions, setSelectedRegions] = useState(["india"]);


  const toggleFilter = (type, value) => {
    if (type === "importance") {
      setSelectedImportance((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else if (type === "region") {
      setSelectedRegions((prev) =>
        prev.includes(value.toLowerCase())
          ? prev.filter((v) => v !== value.toLowerCase())
          : [...prev, value.toLowerCase()]
      );
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto mt-9">
      <h1 className="text-4xl font-bold mb-2">Economic calendar</h1>
      <p className="text-gray-600 mb-4">
        A calendar of important Indian and global economic events that may impact capital markets.
      </p>

      {/* Filters */}
      <div className="flex items-center gap-6 text-sm mb-6 flex-wrap">
        {/* Importance */}
        {["High", "Medium", "Low"].map((label) => (
          <label key={label} className="flex items-center gap-1 capitalize">
            <input
              type="checkbox"
              checked={selectedImportance.includes(label)}
              onChange={() => toggleFilter("importance", label)}
            />
            {label}
          </label>
        ))}

        {/* Region */}
        {["India", "Global"].map((label) => (
          <label key={label} className="flex items-center gap-1 capitalize">
            <input
              type="checkbox"
              checked={selectedRegions.includes(label.toLowerCase())}
              onChange={() => toggleFilter("region", label)}
            />
            {label}
          </label>
        ))}
      </div>

      {/* Table */}
      <div className="border rounded overflow-hidden max-h-[500px] overflow-y-auto">
        <table className="w-full text-left text-sm">
        <thead className="sticky top-0 z-10 bg-gray-100">
            <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Importance</th>
                <th className="px-4 py-2">Previous</th>
                <th className="px-4 py-2">Actual</th>
                <th className="px-4 py-2">Unit</th>
            </tr>
        </thead>
        <tbody>
            {data.economic_calendar.map((day, i) => {
              // Filter events based on selected filters
              const filteredEvents = day.events.filter(
                (event) =>
                  selectedImportance.includes(event.importance) &&
                  selectedRegions.includes(event.region.toLowerCase())
              );

              if (filteredEvents.length === 0) return null;

              return (
                <React.Fragment key={i}>
                  <tr className="bg-white border-t">
                    <td colSpan="6" className="px-4 py-2 font-semibold text-gray-700">
                      {day.date}
                    </td>
                  </tr>
                  {filteredEvents.map((event, j) => (
                    <tr key={j} className="border-t">
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2">{event.event}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            event.importance === "High"
                              ? "bg-red-100 text-red-800"
                              : event.importance === "Medium"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {event.importance}
                        </span>
                      </td>
                      <td className="px-4 py-2">{event.previous}</td>
                      <td className="px-4 py-2 text-green-600">{event.actual}</td>
                      <td className="px-4 py-2">{event.unit}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EconomicCalendar;
