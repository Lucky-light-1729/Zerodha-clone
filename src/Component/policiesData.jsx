const policiesData = [
  {
    heading: "Zerodha",
    content: `Zerodha Broking Ltd. (erstwhile Zerodha) is a member of the National Stock Exchange,

    Bombay Stock Exchange and Multi-Commodity Exchange in the Equity, Equity Derivatives segment, \nCurrency Derivatives segment and Commodity segment respectively, having its registered office at #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bangalore - 560078, Karnataka, India, and Zerodha Commodities Private Limited is a member of the Multi-Commodity Exchange in the Commodity segment, having its registered office at 153/154 4th Cross Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bangalore – 560078 (hereinafter together referred to as “Zerodha”).)<br> For the purpose of these Policies & Procedures, wherever the context so mentions "Client", "You" or "Your", it shall mean any natural or legal person who has agreed to open an account or initiate the process of opening an account with Zerodha by providing their information while registering on the platform as a user. Zerodha allows any person to surf the website without registering on the website. The term "We", "Us", "Our" and "Team Zerodha" shall mean Zerodha Broking Limited and/or Zerodha Commodities Private Limited. Please note that the ‘Policies and Procedures’ should be read with and as a part of our Terms and Conditions available here. These terms and conditions are in addition to and should be read with the main T&C of the zerodha.com website, and the user and account opening agreement between You and Zerodha. These terms are subject to change, and updating this policy by Zerodha is the consent notice for users. If you continue to use any of Zerodha’s platforms,
     it shall be deemed as acceptance of the changes.`
  },

  {
    heading: "Terms:",
    subSections: [
      {
        title: "1. Demat account",
        points: [
          "On opening an account with Zerodha, a demat account and a trading account in your name shall be opened...",
          "Demat accounts opened prior to September 15, 2015, will be held with IL&FS Securities Services Ltd...",
          "Transfer of shares from a third-party demat account into Zerodha’s pool account and selling of such stocks are not allowed.",
          "Zerodha will maintain all client securities in a designated account called the Client Beneficiary Account...",
          "All securities purchased by you shall be transferred to your demat account by T+1 day.",
          "If you purchase securities but fail to fully pay for these, a limited period pledge for seven trading days is created...",
          "You can view your demat account balance directly on the depository website."
        ]
      },
      {
        title: "2. Trading",
        points: [
          "Client trades shall be carried out under the respective unique client code only...",
          "Zerodha shall not be liable for any error or misuse of the client while placing a trade."
        ]
      },
      {
        title: "3. Zerodha charges",
        points: [
          "Refer to the page for our updated charge list.",
          "The Client agrees to pay Zerodha all brokerages, transaction charges, commissions, fees, GST, and other taxes..."
        ]
      },
      {
        title: "4. Penalties",
        points: [
          "Delayed payment charges: Clients are advised to make the payment before the pay-in time...",
          "Charges on FO position: Exchanges stipulate that for overnight F&O positions, 50% of the margin needs to come in cash..."
        ]
      }
    ]
  }, // ✅ Missing comma added here

  {
    heading: "5. Funds",
    subSections: [
      {
        title: "Payin:",
        points: [
          "Clients can transfer funds into the Trading Account only from such bank account(s) that are registered with Zerodha on the Platform...",
          "The client can transfer funds using UPI, from the instant payment gateway facility available on the trading platform...",
          "Payments using UPI are free. Payments through instant payment gateway will be charged at ₹9 + GST...",
          "Payments cannot be made via cash, cheque, or DD.",
          "For more payin details, click here."
        ]
      },
      {
        title: "Payout:",
        points: [
          "All payout requests will have to be placed on the Kite web or app platform, or on Console...",
          "Withdrawal requests for Equity/F&O/Currency will be processed at 10:00 PM on working days, 4:30 PM on Saturdays...",
          "The payout window for Commodities is 8:00 AM on weekdays and 4:00 PM on Saturdays...",
          "Funds added to your trading account on the day cannot be withdrawn on the same day."
        ]
      }
    ]
  },

  {
    heading: "6. Commodities",
    subSections: [
      {
        title: "General",
        points: [
          "Physical delivery of commodities is not allowed by Zerodha.",
          "Commodities with staggered delivery will be closed 5 trading days prior to the expiry date...",
          "On the start of the delivery intention period, clients will not be informed before closing any open positions...",
          "For Commodities, once the delivery intention period begins, no contract will be available under MIS or CO product type.",
          "MIS trading is not available on currency options.",
          "Trading in MCX contracts will be banned a day prior to the delivery intention period."
        ]
      },
      {
        title: "Risks",
        points: [
          "All open options contract will be devolved into futures on the expiry date of the options contract.",
          "The strike price of the devolved options contract is the buy average or sell average of the futures contract.",
          "The exchange blocks a margin equivalent to 25% of the margin required to hold the devolved future contract 2 days before expiry...",
          "Failure to produce the margin in the trading account can lead to a square-off of open positions...",
          "The margin block will be applicable for contracts part of the exchange’s sensitivity report.",
          "Zerodha may also consider imposing additional margin requirements..."
        ]
      }
    ]
  },

  {
    heading: "7. Orders and instruments",
    subSections: [
      {
        title: "",
        points: [
          "Cover Orders (CO) are currently available for NSE/CDS Equity, and typically the margin benefit is higher...",
          "Basket orders will not be allowed on penny stocks.",
          "Due to illiquidity of stock options contracts, market orders have been disabled on stock options...",
          "Only limit and stop loss orders are allowed.",
          "Instruments available for trading at Zerodha are subject to the discretion of Zerodha’s risk management team..."
        ]
      }
    ]
  },

  {
    heading: "8. Square-off timings",
    subSections: [
      {
        title: "",
        points: [
          "Intraday products (MIS/BO/CO) square-off timings:",
          "Equity/Cash: 3:20 PM onwards",
          "Equity derivatives: 3:25 PM onwards",
          "Currency futures: 4:45 PM onwards",
          "Commodity: 25 minutes before close"
        ]
      },
      {
        title: "Additional Notes",
        points: [
          "Intraday square off timings can change based on the discretion of Zerodha.",
          "The Client is solely responsible for squaring off all open positions within these times.",
          "Failure to square off positions will result in carry forward or square-off by Zerodha at your risk.",
          "Zerodha RMS desk will square off any such position without calls if margin call fails.",
          "A charge of ₹50 + GST will apply to all RMS desk square offs.",
          "All BO, CO and MIS positions will be squared off at the end of the each trading day."
        ]
      }
    ]
  },
  {
    heading: "9. Margins",
    subSections: [
      {
        title: "",
        points: [
          "Comprehensive real-time margins at Zerodha can be viewed on their platform.",
          "Zerodha does not provide margin for equity delivery trades; clients must have sufficient funds for such transactions.",
          "NSE/BSE Futures and Options margin is available only when clients pledge securities. Leverage is market-dependent.",
          "MCX Commodities margin is allowed in all non-agri products (except Brent Crude & Silver 1000). Only SPAN margin is blocked for overnight positions.",
          "An additional 5% margin may be collected as per exchange provision, passed on to clients.",
          "Zerodha does not offer Client Funding. Clients must have sufficient balance for holding positions.",
          "Daily margin status reports are available on Console.",
          "Collateral margin details include pledged stocks with haircut, usable only for intraday/F&O positions (not buying equities).",
          "Delayed payment (interest) charges apply monthly and are posted on Console.",
          "Pledging costs ₹30 + GST per instrument. Unpledging is free.",
          "Corporate benefits (e.g., dividends, splits) continue on pledged stocks.",
          "Pledging requires a Zerodha-linked demat account and CDSL OTP authorization.",
          "Zerodha may liquidate stocks if dues arise and remain unpaid."
        ]
      }
    ]
  },

  {
    heading: "10. Closing your account",
    subSections: [
      {
        title: "",
        points: [
          "Clients must raise a specific request to close their account via the given link.",
          "Closure is effective after 7 working days from application/intimation or actual settlement, whichever is later.",
          "Settlement requires no outstanding balances or shares, confirmed by Zerodha.",
          "If inactive for 12 months, re-verification of KYC is required for dormant accounts (not auto-closed).",
          "Zerodha reserves the right to reject frequent reopening of accounts."
        ]
      }
    ]
  },

  {
    heading: "11. Internet-based trading",
    subSections: [
      {
        title: "",
        points: [
          "Zerodha complies with SEBI regulations for online trading (IBT).",
          "Clients will receive a user ID and can set their own passwords. Users are solely responsible for account security.",
          "Online trading is not foolproof and may experience interruptions due to internet or system failures.",
          "Zerodha is not liable for damages from system outages, order failures, or disruptions beyond their control."
        ]
      }
    ]
  },

  {
    heading: "12. Risk disclosure",
    subSections: [
      {
        title: "",
        points: [
          "You understand that trading in equity, derivatives contracts or other instruments traded on the Exchange have a varying element of risk and may not be appropriate for someone of limited resources/limited investment and/or trading experience and low risk tolerance.",
          "You acknowledge and accept that there can be no guarantee of profits or no exception from losses while executing orders for purchase and/or sale of a derivative contract being traded on Exchanges.",
          "In case you trade on the Exchanges and suffer adverse consequences or loss, you shall be solely responsible for the same and Zerodha/ the stock exchanges and/or SEBI shall not be responsible, in any manner whatsoever, for the same.",
          "The following are illustrative basic risks of trading ",
          "Higher volatility: Higher volatility means prices of securities can change a lot. When you trade, your order might not be fully executed, or the price at which your order is executed could be very different from what you expect, leading to losses.",
       
          "Wider spreads in illiquid securities may increase transaction cost.",
          "Stop-loss/limit orders may not execute effectively in volatile markets.",
          "System issues (e.g., slowdowns, outages) can delay or block orders."
        ]
      }
    ]
  },
  {
    heading: "13. Business continuity management policy",
    subSections: [
      {
        title: "I. Purpose",
        points: [
          "This business continuity policy outlines the strategies and procedures that Zerodha Broking Limited (hereinafter “Zerodha”) will follow to ensure the continuity of our critical services in the event of a disruption.",
          "The objectives of this policy are:",
          "a. To ensure the availability and reduce downtime of our online services to customers, and",
          "b. Protect critical data, systems, and infrastructure from potential threats and vulnerabilities, both internal and external."
        ]
      },
      {
        title: "II. Information security",
        points: [
          "Our systems are hosted at the Netmagic Tier-3 data centres in Mumbai and Chennai, and Amazon Internet Services Private Limited data centres in Mumbai and Hyderabad, with state-of-the-art redundancy measures.",
          "At present, we have a production server and a back up server in place for Zerodha’s operations. Both these servers have been synced together to ensure that all data is updated in the backup server in real time.",
          "The data is backed up through storage folders in a highly secured manner, with a) one copy of the backup on the same server, b) another copy stored in the backup server & c) stored on external media devices. Zerodha will back up the SQL database on a daily basis and ensure that it is stored securely.",
          "In case of a primary server failure, alternate communication will be carried out from the secondary server. This will ensure that communication will be continued on the trading platform, as listed in clause III below."
        ]
      },
      {
        title: "III. Alternative Means of Communication in Case of L/L Failure in Internet",
        points: [
          "The backup systems/processes planned for handling the subject is known as the 'Call and Trade' desk. All successfully registered Clients would be provided with 'Call and Trade' numbers. Clients are to call us on such numbers and authenticate their account information, after which the dealer can place trades on behalf of the Client.",
          "All Clients facing any issue on Zerodha’s online portals, due to internet or connectivity failure or any such other difficulty can call on the nationally accessible number to avail of the 'Call and Trade' service. After successful authentication, i.e. manual authentication after providing personal identification details to the 'Call and Trade' dealer, the Clients can access their account as required.",
          "Additional charges of ₹50 + 18% GST per executed order shall be applicable as follows: A) for orders placed through our support/dealing desk, and B) intraday (MIS/BO/CO) positions squared off before market closing by our RMS team.",
          "Note: Trading using our Call & Trade desk involves many uncertain factors which include complex hardware, software, systems, and communication lines. These are susceptible to interruptions and Zerodha does not warrant continuous and uninterrupted access."
        ]
      },
      {
        title: "IV. Recovery procedures",
        points: [
          "• Network failure:",
          "Our systems are hosted at the Netmagic Tier-3 data centres in Mumbai and Chennai, and Amazon Internet Services Private Limited data centres in Mumbai and Hyderabad, with state-of-the-art redundancy measures.",
          "• Network failure:",
          "The data is backed up through storage folders in a highly secured manner, with a) one copy of the backup on the same server itself, b) another copy stored in the backup server & c) stored on external media devices. This shall help restore access of the data as required.",
          "• System / hard disk failure:",
          "To avoid single points of failure, we run parallel servers that are operational simultaneously. This limits redundancy so that the Clients can be provided services with limited downtime delay."
        ]
      }
    ]
  },

  {
    heading: "14. Zerodha AML and CFT Policy",
    subSections: [
      {
        title: "1. Background",
        points: [
          "SEBI vide circular dated 18th January 2006, along with all its updates, requires all ‘Market intermediaries’ to lay down a policy framework for anti-money laundering measures to be followed. EBI has also issued a Master circular dated 19th December 2008, which consolidates all the requirements/obligations issued with regard to AML/CFT, last updated on February 3, 2023. Zerodha Broking Limited (hereinafter “Zerodha”) being a Stock Broker and therefore a market intermediary, is required to adhere to the Master Circular."
        ]
      },
      {
        title: "2. Objective",
        points: [
          "The objective of this PMLA policy is to have a system in place for preventing any money laundering financial transactions through Zerodha, and to identify, monitor, and report any such transaction to appropriate authorities.",
          "“Know Your Customer” (KYC) is the guiding principle behind the Anti-Money Laundering (AML) measures. It incorporates the “Know Your Customer” Standards & “Anti Money Laundering” Measures, hereinafter to be referred to as “KYC Standards” and “AML Measures”. The objective is to have in place adequate policies, practices and procedures that promote high ethical and professional standards and prevent Zerodha from being used, intentionally or unintentionally, by criminal elements. KYC Standards and AML Measures would enable Zerodha to know/understand its customers, the beneficial owners, the principals behind customers who are acting as agents and their financial dealings better which in turn will help Zerodha manage its risks prudently.",
          "The management of the company is fully committed to establish appropriate policies and procedures for ensuring effectiveness and compliance concerning all relevant legal requirements, and undertakes to periodically review the policies."
        ]
      },
      {
        title: "3. Regulatory requirements",
        points: [
          "Roopa K V is the Principal Officer responsible for ensuring the proper discharge of all legal requirements and for:",
          "i. Compliance of the provisions of the PMLA and AML guidelines",
          "ii. Acting as a central reference point and play and active role in identification & assessment of potential suspicious transactions",
          "iii. Ensuring that Zerodha discharges its legal obligation to report suspicious transactions to concerned authorities.",
          "This policy is in relation to customer due diligence, which means:",
          "i. Obtaining sufficient information about the client to identify who is the actual beneficial owner of the securities or on whose behalf transaction is conducted",
          "ii. Verify the customers identity using reliable independent source document, data or information",
          "iii. Conduct on-going due diligence and scrutiny of the account/client to ensure that the transaction conducted are consistent with the clients’ background/financial status, its activities and risk profile.",
          "The customer due diligence process includes these specific parameters:"
        ]
      }
    ]
  },

 
];

export default policiesData;
