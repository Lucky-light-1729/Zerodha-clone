"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  helpers                                                           */
/* ------------------------------------------------------------------ */

const Slider = ({ label, min, max, step, value, unit, onChange }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-700 mb-2">
      <span>{label}</span>
      <span className="font-semibold">
        {unit === "₹" ? "₹" : ""}
        {value.toLocaleString()}
        {unit !== "₹" ? ` ${unit}` : ""}
      </span>
    </div>

    <input
      type="range"
      className="w-full h-2 bg-slate-200 rounded-full outline-none cursor-pointer appearance-none"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />

    <div className="flex justify-between text-xs text-gray-500 mt-1">
      <span>
        {unit === "₹" ? "₹" : ""}
        {min.toLocaleString()}
        {unit !== "₹" ? ` ${unit}` : ""}
      </span>
      <span>
        {unit === "₹" ? "₹" : ""}
        {max.toLocaleString()}
        {unit !== "₹" ? ` ${unit}` : ""}
      </span>
    </div>
  </div>
);

const StatPair = ({ label, value, valueClass = "" }) => (
  <div className="flex justify-between items-center mb-4">
    <span className="text-sm text-gray-600">{label}</span>
    <span className={`font-semibold ${valueClass}`}>{value}</span>
  </div>
);

/* ------------------------------------------------------------------ */
/*  main component                                                    */
/* ------------------------------------------------------------------ */

const CalculatorSip = () => {
  const [sipType, setSipType] = useState("Luminous");
  const [frequency, setFrequency] = useState("Monthly");
  const [sipAmount, setSipAmount] = useState(5000);
  const [investmentDuration, setYears] = useState(10);
  const [expectedReturn, setReturn] = useState(12);
  const [mobile, setMobile] = useState("");

  const calculateSIP = () => {
    const r = expectedReturn / 100 / 12;
    const n = investmentDuration * 12;
    const fv = sipAmount * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const invested = sipAmount * n;

    return {
      totalInvestment: Math.round(invested),
      expectedReturns: Math.round(fv - invested),
      totalValue: Math.round(fv),
    };
  };

  const results = calculateSIP();

  const formatCurrency = (amt) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amt);

  const popularCalculators = [
    "SIP calculator",
    "MTP calculator",
    "BIM calculator",
    "SWP calculator",
    "STF calculator",
    "Retirement calculator",
    "MPB calculator",
  ];

  const faqs = [
    {
      q: "How is the growth of investment calculation for SIPs?",
      a: (
        <div className="space-y-2">
          <p>The future value of an SIP is calculated with:</p>
          <p className="bg-gray-100 p-2 rounded font-mono text-sm">
            FV = P × [((1 + r)<sup>n</sup> − 1) / r] × (1 + r)
          </p>
          <p>
            where <b>P</b> is your monthly investment, <b>r</b> the monthly rate, and <b>n</b> the
            number of months.
          </p>
          <p className="font-semibold pt-2">Example:</p>
          <p>₹20 000 a month for 30 years at 12 % p.a. (1 % monthly) grows to ~₹6.9 crore.</p>
        </div>
      ),
    },
    {
      q: "What does the Goal SIP calculator do?",
      a: "It tells you the SIP instalment needed today to hit a target amount by a future date.",
    },
    {
      q: "How do I know what return rate to enter?",
      a: "Start with historical returns of similar funds or consult your adviser.",
    },
    {
      q: "Does the SIP calculator factor in inflation?",
      a: "No, results are nominal. Adjust separately for inflation if you need real returns.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">SIP calculator</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">SIP</h3>
                  <div className="flex gap-4">
                    {["Luminous", "Gold BP"].map((v) => (
                      <button
                        key={v}
                        onClick={() => setSipType(v)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          sipType === v
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      {frequency} amount
                    </label>
                    <input
                      type="number"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <Slider
                    label="SIP amount"
                    min={500}
                    max={100000}
                    step={500}
                    value={sipAmount}
                    unit="₹"
                    onChange={setSipAmount}
                  />

                  <Slider
                    label="Investment duration"
                    min={1}
                    max={30}
                    step={1}
                    value={investmentDuration}
                    unit="years"
                    onChange={setYears}
                  />

                  <Slider
                    label="Expected rate of return"
                    min={1}
                    max={30}
                    step={0.5}
                    value={expectedReturn}
                    unit="%"
                    onChange={setReturn}
                  />
                </div>

                <div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <StatPair
                      label="Invested amount"
                      value={`₹${formatCurrency(results.totalInvestment)}`}
                    />
                    <StatPair
                      label="Estimated returns"
                      value={`₹${formatCurrency(results.expectedReturns)}`}
                      valueClass="text-green-600"
                    />
                    <div className="h-px bg-blue-200 my-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Total value</span>
                      <span className="text-xl font-bold text-blue-700">
                        ₹{formatCurrency(results.totalValue)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600">
                      INVEST
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">
                      SIP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ CARD */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h2>
            </div>
            <div className="p-6 space-y-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="pb-4 border-b border-slate-200 last:border-b-0">
                  <h3 className="font-semibold text-gray-800 mb-3">{q}</h3>
                  <div className="text-sm text-gray-600">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                New to Zerodha? Sign‑up for free.
              </h3>

              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full p-3 border border-gray-300 rounded-r-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">
                Continue
              </button>

              <p className="text-center text-sm text-gray-500 mt-3">
                Already have an account?{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">Invest now</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-gray-800">Popular Calculators</h3>
            </div>
            <div className="p-4 space-y-2">
              {popularCalculators.map((calc) => (
                <div
                  key={calc}
                  className="py-2 px-3 text-sm text-blue-600 cursor-pointer rounded-lg hover:bg-blue-50"
                >
                  {calc}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-gray-800">Popular Links</h3>
            </div>
            <div className="p-4 space-y-2">
              {["How to create a SIP on the Cota app?", "How to create a SIP on Cota web?"].map(
                (link) => (
                  <div
                    key={link}
                    className="py-2 px-3 text-sm text-blue-600 cursor-pointer rounded-lg hover:bg-blue-50"
                  >
                    {link}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* custom slider thumb */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        input[type="range"]::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default CalculatorSip;
