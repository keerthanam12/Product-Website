import React, { useEffect } from "react";
import "../styles/Services.css";

const Services = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      header.classList.add("static-header");
    }

    return () => {
      if (header) {
        header.classList.remove("static-header");
      }
    };
  }, []);

  return (
    <div className="services-container">
      <div className="intro-section">
        <div className="center-image">
          <img src="/images/left-image.jpg" alt="Left" />
        </div>
        <h1 className="main-heading">
          Fronedge Overseas Pvt Ltd Import & Export Services
        </h1>
      </div>

      <div className="services-details">
        <div className="detail-row">
          <div className="detail-image">
            <img src="/images/merchant-export.jpg" alt="Merchant Export" />
          </div>
          <div className="detail-content">
            <h2>Merchant Export/Trading Export</h2>
            <p>
              Mudra Global is involved in the import & export of a variety of food and commodities around the world. Our company works with a number of farmers, Merchant Exporters, agro suppliers, distributors, and manufacturers to supply the best quality items.
            </p>
            <p>
              We provide import and export services on multiple continents around the world, striving to source quality products and agro-commodities from our suppliers.
            </p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-image">
            <img src="/images/products-distribution.jpg" alt="Products Distribution" />
          </div>
          <div className="detail-content">
            <h2>Products Distribution</h2>
            <p>
              Mudra Global assists businesses in worldwide purchasing, distribution, and delivery. We work in developing countries like Africa, Asia, the USA, the Middle East, and Canada, enabling businesses to set up their distribution channels and place their products in target markets.
            </p>
            <p>
              We have teams of trained professionals, agents, and partners in countries across the globe. We provide the channel setup and support to companies for product distribution and marketing.
            </p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-image">
            <img src="/images/market-analysis.jpg" alt="Market Analysis" />
          </div>
          <div className="detail-content">
            <h2>Market Analysis</h2>
            <p>
              We provide our clients with the latest opportunities, insights and perspectives to facilitate better decision making. Venturing in a new country or territory can be a challenging task for any organization. A company needs adequate market analysis and support to establish itself in a new market.
            </p>
            <p>
              We have the skills, experience and required  manpower to supply crucial information and reports that can facilitate expansion in a new territory.
            </p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-image">
            <img src="/images/negotiation-and-partnership-strategy.jpg" alt="Negotiation and Partnership Strategy" />
          </div>
          <div className="detail-content">
            <h2>Negotiation and Partnership Strategy</h2>
            <p>
              Mudra global has a unique collaborative endeavor based on its own merits and homework that brings toward a win-win outcome. We have enabled companies from diverse geographies to come together and form an alliance.
            </p>
            <p>
              If you want to operate in a foreign country, it becomes the need of the hour to form an alliance with a local organization that can enable business set-up and expansion.
            </p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-image">
            <img src="/images/international-business-consulting.jpg" alt="International Business Consulting" />
          </div>
          <div className="detail-content">
            <h2>International Business Consulting</h2>
            <p>
              Establishing a business abroad can be a complex task. We possess the ability to guide our clients through complex regulations and policies of a local country.
            </p>
            <p>
              We have the capability of accessing the local political environment, foreign investment regulations, economic progress, currency valuation, demography, product/services forecast, etc for any country or region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
