import React from "react";
import { Link } from "react-router-dom";

import logo from "./assets/img/logo.svg";
import xTwitter from "./assets/img/x-twitter.svg";
import facebook from "./assets/img/facebook.svg";
import instagram from "./assets/img/instagram.svg";
import linkedin from "./assets/img/linkedin.svg";
import youtube from "./assets/img/youtube.svg";
import whatsapp from "./assets/img/whatsapp.svg";
import telegram from "./assets/img/telegram.svg";

import FooterColumn from "./Component/FooterColumn";

const SOCIAL_ICONS_TOP = [
  { alt: "X / Twitter", href: "https://twitter.com", src: xTwitter },
  { alt: "Facebook", href: "https://facebook.com", src: facebook },
  { alt: "Instagram", href: "https://instagram.com", src: instagram },
  { alt: "LinkedIn", href: "https://linkedin.com", src: linkedin },
];

const SOCIAL_ICONS_BOTTOM = [
  { alt: "YouTube", href: "https://youtube.com", src: youtube },
  { alt: "WhatsApp", href: "https://wa.me", src: whatsapp },
  { alt: "Telegram", href: "https://t.me", src: telegram },
];


const BOTTOM_NAV = [
  ["NSE", "https://www.nseindia.com/"],
  ["BSE", "https://www.bseindia.com/"],
  ["MCX", "https://www.mcxindia.com/"],
  ["Terms & conditions", "/terms"],
  ["Policies & procedures", "/policies"],
  ["Privacy policy", "/privacy"],
  ["Disclosure", "/disclosure"],
  ["For investor's attention", "/investor-attention"],
  ["Investor charter", "/investor-charter"],
];

const DISCLAIMER = [
  `Zerodha Broking Ltd.: Member of NSE, BSE & MCX  SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF`,
  `Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances`,
  `Smart Online Dispute Resolution | Grievances Redressal Mechanism`,
  `Investments in securities market are subject to market risks; read all the related documents carefully before investing.`, 
  `Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.`,
  `"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.`,
];

const Footer = () => (
  <footer className="border-t bg-white text-gray-700 mt-5">
    <div className="mx-auto max-w-7xl px-4 py-12">

      <div className="grid gap-10 md:grid-cols-5">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="CloneBrand"
              className="h-6 w-auto"
            />
          </Link>

          <p className="mt-4 text-sm">&copy;&nbsp;2010&nbsp;-&nbsp;2025, Zerodha Broking Ltd.</p>
          <p className="text-sm">All rights reserved.</p>

          <ul className="mt-6 flex gap-6">
            {SOCIAL_ICONS_TOP.map(({ alt, href, src }) => (
              <li key={alt}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img src={src} alt={alt} className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>

          <hr className="my-6 border-gray-200" />
          <ul className="flex gap-6">
            {SOCIAL_ICONS_BOTTOM.map(({ alt, href, src }) => (
              <li key={alt}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img src={src} alt={alt} className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn
          title="Account"
          links={[
            ["Open demat account", "/open-account"],
            ["Minor demat account", "/open-account/minor"],
            ["NRI demat account", "/open-account/nri"],
            ["Commodity", "/commodities"],
            ["Dematerialisation", "/dematerialise"],
            ["Fund transfer", "/fund-transfer"],
            ["MTF", "/mtf"],
            ["Referral program", "/refer"],
          ]}
        />

        <FooterColumn
          title="Support"
          links={[
            ["Contact us", "/contact"],
            ["Support portal", "/support"],
            ["How to file a complaint?", "/support/how-to-complain"],
            ["Status of your complaints", "/support/complaint-status"],
            ["Bulletin", "/market/bulletin"],
            ["Circular", "/market/circulars"],
            ["Z‑Connect blog", "/blog"],
            ["Downloads", "/downloads"],
          ]}
        />

        <FooterColumn
          title="Company"
          links={[
            ["About", "/about"],
            ["Philosophy", "/philosophy"],
            ["Press & media", "/media"],
            ["Careers", "/careers"],
            ["Zerodha Cares (CSR)", "/csr"],
            ["Zerodha.tech", "/tech"],
            ["Open source", "/open-source"],
          ]}
        />

        <FooterColumn
          title="Quick links"
          links={[
            ["Upcoming IPOs", "/ipos"],
            ["Brokerage charges", "/charges"],
            ["Market holidays", "/market/holiday"],
            ["Economic calendar", "/economic-calendar"],
            ["Calculators", "/calculators"],
            ["Markets", "/markets"],
            ["Sectors", "/sectors"],
          ]}
        />
      </div>

      <div className="mt-14 space-y-6 text-xs leading-relaxed text-gray-500">
        {DISCLAIMER.map((para, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </div>

      <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-700">
      {BOTTOM_NAV.map(([label, to]) => (
        <li key={label}>
          {to.startsWith("http") ? (
            <a
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 hover:underline"
            >
              {label}
            </a>
          ) : (
            <Link to={to} className="hover:text-gray-900 hover:underline">
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>

    </div>
  </footer>
);


export default Footer;
