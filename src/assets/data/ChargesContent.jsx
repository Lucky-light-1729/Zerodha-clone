// chargesContent.js
export const chargesSections = [
  {
    heading: "Securities/Commodities transaction tax",
    content: `Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.
Important to keep a tab.`
  },
  {
    heading: "Transaction/Turnover Charges",
    content: `Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

BSE has revised transaction charges in X, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f.01.01.2016. (XC and XD groups have been merged into a new group X w.e.f. 01.12.2017)

BSE has revised transaction charges in SS and ST groups to ₹10,000 per crore of gross turnover.

BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.`
  },
  {
    heading: "Call & trade",
    content: `Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.`
  },
  {
    heading: "Stamp charges",
    content: `Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.`
  },
  {
    heading: "NRI brokerage charges",
    content: `₹100 per order for futures and options.
For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
₹500 + GST as yearly account maintenance charges (AMC) charges.`
  },
  {
    heading: "Account with debit balance",
    content: `If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.`
  },
  {
    heading: "Charges for Investor’s Protection Fund Trust (IPFT) by NSE",
    content: `Equity and Futures - ₹10 per crore + GST of the traded value.
Options - ₹50 per crore + GST traded value (premium value).
Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.`
  },
  {
    heading: "Margin Trading Facility (MTF)",
    content: `MTF Interest: 0.044% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
MTF Brokerage: 0.03% or ₹20, executed order, whichever is lower.
MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.`
  },
  {
    heading: "GST",
    content: `Tax levied by the government on the services rendered. 18% ( of brokerage + SEBI charges + transaction charges)`
  },
  {
    heading: "SEBI Charges",
    content: `Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.`
  },
  {
    heading: "DP (Depository participant) charges",
    content: `₹13.5 per scrip (₹3.5 CDSL fee + ₹5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.

Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.`
  },
  {
    heading: "Pledging charges",
    content: `₹30 + GST per pledge request per ISIN.`
  },
  {
    heading: "AMC (Account maintenance charges)",
    content: `For BSDA demat account: Zero charges if the holding value is less than ₹50,000.
For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).`
  },
  {
    heading: "Corporate action order charges",
    content: `₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.`
  },
  {
    heading: "Off-market transfer charges",
    content: `₹25 per transaction.`
  },
  {
    heading: "Physical CMR request",
    content: `First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.`
  },
  {
    heading: "Payment gateway charges",
    content: `₹9 + GST (Not levied on transfers done via UPI)`
  },
  {
    heading: "Delayed Payment Charges",
    content: `Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.`
  },
  {
    heading: "Trading using 3-in-1 account with block functionality",
    content: `Delivery & MTF Brokerage: 0.5% per executed order.
Intraday Brokerage: 0.05% per executed order.`
  },
  {
    heading: "Disclaimer",
    content: `For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.`
  }
];

export const accountOpening = [
  { type: "Online account", charges: "FREE"},
   { type: "Offline account", charges: "FREE" },
  { type: "NRI account (offline only)", charges: "₹ 500" },
    { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charges: "₹ 500" }
];

export const optionalServices = [
  { service: "TickerTape", frequency: "Monthly / Annual", charges: "Free: 0 | Pro: 249/2399" },
  { service: "Smallcase", frequency: "Per transaction", charges: "Buy & Invest More: 100 | SIP: 10" },
  { service: "Kite Connect", frequency: "Monthly", charges: "Connect: 500 | Historical: 500" }
];
// new