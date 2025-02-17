import React from "react";
import "../styles/Company.css"; 

const Company = () => {
  return (
    <section
      className="company-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/company.jpg'})`,
      }}
    >
      <div className="content-container">
        <h2 className="company-heading">Our determination as an international trading company</h2>
        <p className="company-content">
          Importers and exporters can quickly be confused in the international business for the first time by the vast number of requirements and scattered sources of information. We are committed to consulting on every aspect of import & export, service including the selection of suppliers, the negotiation of contracts, convenient delivery terms, the selection of carriers and routes, the clearance, storage, and distribution of customs, and other areas of interest for your business. An importing and exporting trading company can be hostile to new individuals, and before they could even start, many are discouraged and discarded. You will have a full source of knowledge and resources with Mudra Global as your companion to help ship your products worldwide.
        </p>
      </div>
    </section>
  );
};

export default Company;

