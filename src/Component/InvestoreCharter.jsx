import React from "react";
import { investorCharterContent, dosAndDonts } from './InvestoreContent';

function InvestoreCharter() {
  const {
    vision,
    mission,
    servicesProvided,
    rightsOfInvestors,
    timelinesTable,
    specialCircumstances
  } = investorCharterContent;

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Investor Charter</h1>

      {/* Vision */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Vision</h2>
        <p>{vision}</p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Mission</h2>
        <ul className="list-disc ml-6 space-y-1">
          {mission.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Services Provided to Investors</h2>
        <ul className="list-disc ml-6 space-y-1">
          {servicesProvided.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Rights */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Rights of Investors</h2>
        <ul className="list-disc ml-6 space-y-1">
          {rightsOfInvestors.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Timelines Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Various Activities of Stock Brokers with Timelines
        </h2>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-2 border">S.No.</th>
                <th className="p-2 border">Activities</th>
                <th className="p-2 border">Expected Timelines</th>
              </tr>
            </thead>
            <tbody>
              {timelinesTable.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{row.sno}</td>
                  <td className="p-2 border">{row.activity}</td>
                  <td className="p-2 border">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DOs and DON'Ts Table */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          DOs and DON’Ts for Investors
        </h2>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left text-lg">DOs</th>
                <th className="p-3 border text-left text-lg">DON’Ts</th>
              </tr>
            </thead>
            <tbody>
              {dosAndDonts.map((item, idx) => (
                <tr key={idx} className="align-top">
                  <td className="p-3 border">{item.do}</td>
                  <td className="p-3 border">{item.dont || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Handling of Investor Claims */}
      <section>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Handling of Investor’s claims / complaints in case of default of a Trading Member / Clearing Member (TM/CM)
        </h1>

        <h2 className="text-xl font-semibold mb-2">Default of TM/CM</h2>
        <p className="mb-4">
          Following steps are carried out by Stock Exchange for benefit of investor, in case stockbroker defaults:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Circular is issued to inform about declaration of Stock Broker as Defaulter.</li>
          <li>Information of defaulter stock broker is disseminated on Stock Exchange website.</li>
          <li>Public Notice is issued informing declaration of a stock broker as defaulter and inviting claims within specified period.</li>
          <li>Intimation to clients of defaulter stock brokers via emails and SMS for facilitating lodging of claims within the specified period.</li>
        </ul>

        <p className="mb-2">Following information is available on Stock Exchange website for information of investors:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Norms for eligibility of claims for compensation from IPF</li>
          <li>Claim form for lodging claim against defaulter stock broker</li>
          <li>FAQ on processing of investors’ claims against Defaulter stock broker</li>
          <li>Provision to check online status of client’s claim</li>
          <li>Standard Operating Procedure (SOP) for handling of claims of investors in the cases of default by brokers</li>
          <li>Claim processing policy against defaulter/expelled members</li>
          <li>List of defaulter/expelled members and public notice issued</li>
        </ul>
      </section>

      {/* Investor Charter for DPs */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Investor Charter for Depositories and Depository Participants (Annexure – A)
        </h2>

        <h3 className="text-xl font-semibold mb-2">Vision</h3>
        <p className="mb-4">
          Towards making Indian Securities Market - Transparent, Efficient, & Investor friendly by providing safe, reliable,
          transparent and trusted record keeping platform for investors to hold and transfer securities in dematerialized form.
        </p>

        <h3 className="text-xl font-semibold mb-2">Mission</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            To hold securities of investors in dematerialized form and facilitate its transfer, while ensuring safekeeping of securities and protecting interest of investors.
          </li>
          <li>
            To provide timely and accurate information to investors with regard to their holding and transfer of securities held.
          </li>
        </ul>
      </section>

      {/* DP Business Details */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Details of business transacted by the Depository and Depository Participant (DP)
        </h2>
        <p>
          A Depository is an organization which holds securities of investors in electronic form. Depositories provide services to
          various market participants - Exchanges, Clearing Corporations, Depository Participants (DPs), Issuers and Investors in both
          primary as well as secondary markets. The depository carries out its activities through its agents which are known as Depository Participants (DP).
          Details available on the link:{" "}
          <a
            href="https://www.cdslindia.com/DP/dplist.aspx"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cdslindia.com/DP/dplist.aspx
          </a>
        </p>
      </section>

      {/* Special Circumstances Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Guidance Pertaining to Special Circumstances: Termination of the Depository Participant
        </h2>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">S.No.</th>
                <th className="p-2 border">Type of Special Circumstances</th>
                <th className="p-2 border">Timelines for the Activity / Service</th>
              </tr>
            </thead>
            <tbody>
              {specialCircumstances.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-2 border align-top">{item.sno}</td>
                  <td className="p-2 border">
                    <ul className="list-disc ml-4 space-y-1">
                      {item.circumstances.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2 border">{item.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Additional Important Links Section (based on image) */}
<section className="space-y-10 pt-10">
  <div>
    <h2 className="text-2xl font-semibold text-black">Dos and Don’ts for Investors</h2>
    <p>
      For Do’s and Don’ts please refer to the{" "}
      <a
        href="https://www.sebi.gov.in/sebi_data/commondocs/dosdonts_p.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 no-underline"
      >
        link
      </a>.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-black">Rights of investors</h2>
    <p>
      For rights, please refer to the{" "}
      <a
        href="https://www.sebi.gov.in/sebi_data/investoralerts/rights_p.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 no-underline"
      >
        link
      </a>.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-black">Responsibilities of Investors</h2>
    <p>
      For responsibilities, please refer to the{" "}
      <a
        href="https://www.sebi.gov.in/sebi_data/investoralerts/responsibilities_p.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 no-underline"
      >
        link
      </a>.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-black">Code of Conduct for Participants</h2>
    <p>
      For responsibilities, please refer to the{" "}
      <a
        href="https://www.sebi.gov.in/sebi_data/codeofconduct_p.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 no-underline "
      >
        link
      </a>.
    </p>
  </div>
</section>


   
    </div>
  );
}

export default InvestoreCharter;
