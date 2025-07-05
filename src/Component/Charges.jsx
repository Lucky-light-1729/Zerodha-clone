import React, { useState } from 'react';
import price1 from '../assets/img/price1.svg';
import price2 from '../assets/img/price2.svg';

import { chargesSections, accountOpening, optionalServices  } from '../assets/data/ChargesContent';

function Charges() {
  const [activeTab, setActiveTab] = useState('equityDelivery');
  //


 const chargesData = [
    {
      price: price1,
      title: 'Free equity delivery',
      description:
        'All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.',
    },
    {
      price: price2,
      title: 'Intraday and F&O trades',
      description:
        'Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.',
    },
    {
      price: price1,
      title: 'Free direct MF',
      description:
        'All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.',
    },
  ];

  const tableData = {
    equityDelivery: {
      title: "Equity Delivery",
      headers: ['Component', 'Rate', 'Description', 'Applicability', 'Notes'],
      rows: [
        {
          component: 'Brokerage',
          rate: 'Zero Brokerage',
          description: 'No charges on delivery-based equity trades.',
          applicability: 'NSE, BSE',
          notes: 'Zero cost for long-term investments'
        },
        {
          component: 'STT/CTT',
          rate: '0.1% on buy & sell',
          description: 'Securities Transaction Tax',
          applicability: 'Both sides',
          notes: 'Government levy'
        },
        {
          component: 'Transaction charges',
          rate: 'NSE: 0.00297%, BSE: 0.00375%',
          description: 'Exchange levied charges',
          applicability: 'On traded value',
          notes: 'Varies by exchange'
        },
        {
          component: 'GST',
          rate: '18%',
          description: 'Goods & Services Tax',
          applicability: 'On brokerage + SEBI + transaction charges',
          notes: 'Government tax'
        },
        {
          component: 'SEBI charges',
          rate: '₹10 / crore',
          description: 'Regulatory charges',
          applicability: 'On turnover',
          notes: 'Flat rate'
        },
        {
          component: 'Stamp charges',
          rate: '0.015% or ₹1500 / crore on buy side',
          description: 'Stamp duty on transaction',
          applicability: 'Buy side only',
          notes: 'Higher of the two applied'
        }
      ]
    },

    equityIntraday: {
      title: "Equity Intraday",
      headers: ['Component', 'Rate', 'Description', 'Applicability', 'Notes'],
      rows: [
        {
          component: 'Brokerage',
          rate: '0.03% or ₹20/executed order (lower)',
          description: 'Broker commission per trade',
          applicability: 'Per executed order',
          notes: 'Whichever is lower applies'
        },
        {
          component: 'STT/CTT',
          rate: '0.025% on the sell side',
          description: 'Securities Transaction Tax',
          applicability: 'Sell side only',
          notes: 'Only on selling'
        },
        {
          component: 'Transaction charges',
          rate: 'NSE: 0.00297%, BSE: 0.00375%',
          description: 'Exchange charges',
          applicability: 'On traded value',
          notes: ''
        },
        {
          component: 'GST',
          rate: '18%',
          description: 'Goods & Services Tax',
          applicability: 'On brokerage + SEBI + transaction charges',
          notes: ''
        },
        {
          component: 'SEBI charges',
          rate: '₹10 / crore',
          description: 'Regulatory charges',
          applicability: 'On turnover',
          notes: ''
        },
        {
          component: 'Stamp charges',
          rate: '0.003% or ₹300 / crore on buy side',
          description: 'Stamp duty',
          applicability: 'Buy side only',
          notes: ''
        }
      ]
    },

    fnoFutures: {
      title: "F&O - Futures",
      headers: ['Component', 'Rate', 'Description', 'Applicability', 'Notes'],
      rows: [
        {
          component: 'Brokerage',
          rate: '0.03% or ₹20/executed order (lower)',
          description: 'Broker commission',
          applicability: 'Per executed order',
          notes: 'Lowest cost option applies'
        },
        {
          component: 'STT/CTT',
          rate: '0.02% on the sell side',
          description: 'Commodities Transaction Tax',
          applicability: 'Sell side only',
          notes: ''
        },
        {
          component: 'Transaction charges',
          rate: 'NSE: 0.00173%, BSE: 0%',
          description: 'Exchange levied fees',
          applicability: 'On trade value',
          notes: 'BSE may waive it'
        },
        {
          component: 'GST',
          rate: '18%',
          description: 'Goods & Services Tax',
          applicability: 'On brokerage + SEBI + transaction charges',
          notes: ''
        },
        {
          component: 'SEBI charges',
          rate: '₹10 / crore',
          description: 'SEBI regulatory fee',
          applicability: 'On turnover',
          notes: ''
        },
        {
          component: 'Stamp charges',
          rate: '0.002% or ₹200 / crore on buy side',
          description: 'Stamp duty',
          applicability: 'Buy side',
          notes: ''
        }
      ]
    }
  };
 

  //
  const renderTableContent = () => {
    const data = tableData[activeTab];
    if (!data) return null;

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              {data.headers.map((header, index) => (
                <th key={index} className="py-2 px-4 border-b text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="py-2 px-4 border-b">{row.component}</td>
                <td className="py-2 px-4 border-b">{row.rate}</td>
                <td className="py-2 px-4 border-b">{row.description}</td>
                <td className="py-2 px-4 border-b">{row.applicability}</td>
                <td className="py-2 px-4 border-b">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 mt-9">Charges</h2>
        <p className="text-gray-600 text-lg">List of all charges and taxes</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {chargesData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 shadow hover:shadow-lg transition mt-7">
            <div className="relative mb-6">
              <img src={item.price} alt="Charge Icon" className="w-48 h-40" />
              <span className="absolute -right-2 -top-2 w-6 h-6 bg-blue-200 rounded-full opacity-40 animate-ping"></span>
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex justify-center border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('equityDelivery')}
            className={`py-3 px-6 text-lg font-medium ${
              activeTab === 'equityDelivery'
                ? 'border-b-4 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Equity
          </button>
          <button
            onClick={() => setActiveTab('equityIntraday')}
            className={`py-3 px-6 text-lg font-medium ${
              activeTab === 'equityIntraday'
                ? 'border-b-4 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Currency
          </button>
          <button
            onClick={() => setActiveTab('fnoFutures')}
            className={`py-3 px-6 text-lg font-medium ${
              activeTab === 'fnoFutures'
                ? 'border-b-4 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Commodity
          </button>
        </div>

        {renderTableContent()}

        <p className="text-center text-gray-600 text-lg mt-10">
          Calculate your costs upfront using our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            brokerage calculator
          </a>
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Charges explained</h1>

        <div className="space-y-6 text-gray-800 text-sm">
          {chargesSections.map((item, idx) => (
            <div key={idx}>
              <h2 className="font-semibold text-lg mb-1">{item.heading}</h2>
              <p className="whitespace-pre-line">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Charges for account opening</h2>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Type of account</th>
                <th className="border p-2">Charges</th>
              </tr>
            </thead>
            <tbody>
              {accountOpening.map((row, idx) => (
                <tr key={idx}>
                  <td className="border p-3">{row.type}</td>
                  <td className="border p-2">{row.charges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Charges for optional value added services</h2>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Service</th>
                <th className="border p-2">Billing Frequency</th>
                <th className="border p-2">Charges</th>
              </tr>
            </thead>
            <tbody>
              {optionalServices.map((row, idx) => (
                <tr key={idx}>
                  <td className="border p-2">{row.service}</td>
                  <td className="border p-2">{row.frequency}</td>
                  <td className="border p-2">{row.charges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charges;
