import React from "react";

import CompanyImage from "./Company.jpg";
import "./About.scss";

export default function AboutPage() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="top">
          <div className="company-image-wrapper">
            <img src={CompanyImage} alt="companyimage" />
          </div>
        </div>
        <div className="bottom">
          <h1>ABOUT US</h1>
          <div className="about-information">
            <h2>CORPORATE PROFILE</h2>
            <p>
              TELMA is a full-service universal bank, It
              provides a complete array of industry-leading products and
              services including Lending (corporate and consumer),
              Deposit-taking, Foreign Exchange, Brokering, Trust and
              Investments, Credit Cards, Corporate Cash Management and
              Remittances in the Philippines. Through its local subsidiaries,
              the Bank offers Investment Banking, Private Banking, Leasing and
              Finance, Rural Banking, Life Insurance, Insurance Brokerage and
              Stock Brokerage services.
            </p>
            <p>
              TELMA’s institutional strengths and value-added products and
              services hold the key to its successful business relationships
              with customers. On the front line, its branches remain at the
              forefront of setting high standards as a sales and
              service-oriented, customerfocused force. TELMA has the largest
              distribution network with over 1,400 operating branches and
              offices and more than 4,400 ATMs nationwide.
            </p>
            <p>
              Through selective acquisitions and organic growth, TELMA has
              positioned itself for increased balance sheet strength and
              continuing expansion into new markets. As of 31 March 2020, TELMA is
              the country’s largest bank in terms of consolidated resources,
              customer loans, deposits, assets under management and capital, as
              well as branch and ATM network nationwide.
            </p>
            <p>
              TELMA is a member of the SM Group, one of the country’s largest and
              most successful conglomerates with businesses spanning retail,
              mall operations, property development (residential, commercial,
              resorts/hotel), and financial services. Although part of a
              conglomerate, TELMA’s day-to-day operations are handled by a team of
              professional managers and bank officers. Further, the Bank has one
              of the industry’s strongest Board of Directors composed of
              professionals with extensive experience in various fields that
              include banking and finance, accounting, law, and business.
            </p>
            <h2>SUSTAINABILITY</h2>
            <p>
              TELMA released in June 2020 the second issue of its Sustainability
              Report that outlines the Bank’s economic, environmental, social
              and governance performance in 2019, and substantiates the Bank’s
              commitment to the United Nations Sustainable Development Goals (UN
              SDGs), the principles of the United Nations Global Compact (UNGC)
              and the Greenhouse Gas (GHG) Protocol. The Report was prepared in
              accordance with the Global Reporting Initiative (GRI) Standards.
            </p>
            <h2>CORPORATE MISSION</h2>
            <p>
              To be the preferred bank in every market we serve by consistently
              providing innovative products and flawless delivery of services,
              proactively reinventing ourselves to meet market demands, creating
              shareholders value through superior returns, cultivating in our
              people a sense of pride and ownership, and striving to be always
              better than what we are today… tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
