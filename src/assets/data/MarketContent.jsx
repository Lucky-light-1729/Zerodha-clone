// src/data/holidaysData.js

const holidaysData = [
  {
    day: "Wednesday",
    date: "26 Feb 2025",
    holiday: "Maha Shivaratri",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Thursday",
    date: "10 Apr 2025",
    holiday: "Mahavir Jayanti",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Monday",
    date: "14 Apr 2025",
    holiday: "Dr. Baba Saheb Ambedkar Jayanti",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Friday",
    date: "18 Apr 2025",
    holiday: "Good Friday",
    exchanges: ["NSE", "BSE", "MCX"],
  },
  {
    day: "Thursday",
    date: "01 May 2025",
    holiday: "Maharashtra Day",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Friday",
    date: "15 Aug 2025",
    holiday: "Independence Day",
    exchanges: ["NSE", "BSE", "MCX"],
  },
  {
    day: "Wednesday",
    date: "27 Aug 2025",
    holiday: "Ganesh Chaturthi",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Thursday",
    date: "02 Oct 2025",
    holiday: "Mahatma Gandhi Jayanti",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Tuesday",
    date: "21 Oct 2025",
    holiday: "Diwali-Laxmi Pujan (Muhurat trading session)",
    exchanges: ["NSE", "BSE", "MCX"],
  },
  {
    day: "Wednesday",
    date: "22 Oct 2025",
    holiday: "Diwali-Balipratipada",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Wednesday",
    date: "05 Nov 2025",
    holiday: "Gurunanak Jayanti",
    exchanges: ["NSE", "BSE"],
  },
  {
    day: "Thursday",
    date: "25 Dec 2025",
    holiday: "Christmas",
    exchanges: ["NSE", "BSE", "MCX"],
  },
];

const settlementHolidaysData = [
  {
    day: "Wednesday",
    date: "19 Feb 2025",
    holiday: "Chhatrapati Shivaji Maharaj Jayanti",
    type: "SETTLEMENT",
  },
  {
    day: "Tuesday",
    date: "01 Apr 2025",
    holiday: "Annual Bank closing",
    type: "SETTLEMENT",
  },
  {
    day: "Monday",
    date: "12 May 2025",
    holiday: "Buddha Pournima",
    type: "SETTLEMENT",
  },
  {
    day: "Friday",
    date: "05 Sep 2025",
    holiday: "Id-E-Milad",
    type: "SETTLEMENT",
  },
];// src/data/mcxHolidaysData.js

const mcxHolidaysData = [
  {
    day: "Sunday",
    date: "26 Jan 2025",
    holiday: "Republic Day",
    exchange: "MCX",
  },
  {
    day: "Friday",
    date: "18 Apr 2025",
    holiday: "Good Friday",
    exchange: "MCX",
  },
  {
    day: "Friday",
    date: "15 Aug 2025",
    holiday: "Independence Day",
    exchange: "MCX",
  },
  {
    day: "Thursday",
    date: "02 Oct 2025",
    holiday: "Mahatma Gandhi Jayanti",
    exchange: "MCX",
  },
  {
    day: "Tuesday",
    date: "21 Oct 2025",
    holiday: "Diwali-Laxmi Pujan (Muhurat trading session)",
    exchange: "MCX",
  },
  {
    day: "Thursday",
    date: "25 Dec 2025",
    holiday: "Christmas",
    exchange: "MCX",
  },
];
// MarketContent.js
 const bulletinData = [
  {
    date: "24 Jun 2025, 10:04 AM",
    title: "Exclusion of F&O contracts on 8 securities from August 29, 2025",
  },
  {
    date: "17 Jun 2025, 05:09 PM",
    title: "Revision in expiry day of Index and Stock derivatives contracts",
  },
  {
    date: "01 Jul 2025, 03:09 PM",
    title: "Quarterly Settlement of Funds - July 2025",
  },
  {
    date: "01 Jul 2025, 08:10 AM",
    title: "Offer for sale (OFS) – June 2025",
  },
  {
    date: "01 Jul 2025, 08:00 AM",
    title: "Surveillance measure on scrips - July 2025",
  },
  {
    date: "01 Jul 2025, 08:00 AM",
    title: "Current Takeovers and Delisting – July 2025",
  },
  {
    date: "01 Jul 2025, 07:41 AM",
    title: "Latest Intraday leverages and Square-off timings",
  },
  // Add more items based on image
];
 const circular = [
  { date: "26 Jun 2025", title: "Rights issue of Mirc Electronics Ltd", exchange: "BSE" },
  { date: "26 Jun 2025", title: "Merger of Umang Dairies Ltd", exchange: "BSE" },
  { date: "26 Jun 2025", title: "Rights issue of Bodhtree Consulting Ltd", exchange: "BSE" },
  { date: "26 Jun 2025", title: "Adjustment of F&O contracts of Concor due to bonus", exchange: "NSE" },
  { date: "25 Jun 2025", title: "Change in the symbol of Mahaveer Infoway Ltd", exchange: "BSE" },
  { date: "25 Jun 2025", title: "Change in name and symbol of Vandana Knitwear Ltd", exchange: "BSE" },
  { date: "25 Jun 2025", title: "Change in name and symbol of S R G Securities Finance Ltd", exchange: "BSE" },
  { date: "24 Jun 2025", title: "Rights issue of GVP Infotech Ltd", exchange: "BSE" },
  { date: "24 Jun 2025", title: "Exclusion of F&O contract on 8 securities", exchange: "NSE" },
  { date: "24 Jun 2025", title: "Rights entitlements of Capital Trust Ltd.", exchange: "BSE" },
  { date: "23 Jun 2025", title: "Bonus issue of Investment & Precision Castings Ltd", exchange: "BSE" },
  { date: "23 Jun 2025", title: "Rights issue of Infibeam Avenues Ltd", exchange: "BSE" },
  { date: "23 Jun 2025", title: "Change in name and symbol of Adinath Exim Resources Ltd", exchange: "BSE" },
  { date: "23 Jun 2025", title: "Change in name and symbol of KBC Global Ltd", exchange: "NSE" },
  { date: "20 Jun 2025", title: "Rights entitlements of 7NR Retail Ltd", exchange: "BSE" },
  { date: "20 Jun 2025", title: "Rights entitlements of IFL Enterprises Ltd", exchange: "BSE" },
  { date: "20 Jun 2025", title: "Stock split of Laddu Gopal Online Services Ltd", exchange: "BSE" },
  { date: "20 Jun 2025", title: "Change in the name and symbol of Sat Industries Ltd", exchange: "BSE" },
  { date: "19 Jun 2025", title: "Rights entitlements of Som Datt Finance Corporation Ltd", exchange: "BSE" },
  { date: "18 Jun 2025", title: "Rights entitlements of Ethos Ltd", exchange: "BSE" },
  { date: "18 Jun 2025", title: "Merger of Inox Wind Energy ltd", exchange: "BSE" },
  { date: "18 Jun 2025", title: "Adjustment of F&O contracts of PNB due to dividend", exchange: "NSE" },
  { date: "18 Jun 2025", title: "Change in the name and symbol of Kavveri Telecom Products Ltd", exchange: "BSE" },
  { date: "18 Jun 2025", title: "Stock split of Elitecon International Ltd", exchange: "BSE" },
  { date: "17 Jun 2025", title: "Rights Entitlements of Accent Microcell Ltd", exchange: "NSE" },
  { date: "17 Jun 2025", title: "Rights entitlements of Sylph Technologies Ltd", exchange: "BSE" },
  { date: "16 Jun 2025", title: "Adjustment of F&O contracts of BAJAJ-AUTO due to dividend", exchange: "NSE" },
  { date: "16 Jun 2025", title: "Adjustment of F&O contracts of TECHM due to dividend", exchange: "NSE" },
  { date: "16 Jun 2025", title: "Reduction of equity share capital of Shri Krishna Prasadam Ltd", exchange: "BSE" },
];




export { holidaysData, settlementHolidaysData ,mcxHolidaysData,bulletinData ,circular};
