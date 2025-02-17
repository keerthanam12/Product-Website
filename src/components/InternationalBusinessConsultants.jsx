import React, { useEffect } from "react";
import "../styles/InternationalBusinessConsultants.css";
import ContactFormPage from "./ContactFormPage";
import { Link } from "react-router-dom";
import CardFormPage from "./CardFormPage";

const InternationalBusinessConsultants = () => {
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
    <div className="international-consultants-container">
      <div className="content-section">
        <div className="slider-section">
          <div className="slider-content">
            <h1 className="heading-dark">
              Mudra Global Business Consulting Companies
            </h1>
            <p className="content-light">
              We are a very successful International Business Consulting & have
              transformed many small companies to become globally known with market
              presence in 50 countries and achieved exponential growth in revenue & profits.
              If you are a small/medium manufacturer, keen to develop export markets without
              incurring huge initial costs of setting up a full-fledged export division, we
              can help you achieve your goals by being your International Marketing Partners
              & develop markets for your products globally.
            </p>
            <ul className="bullet-points">
              <li>International Trade</li>
              <li>Go-to-Market Strategy</li>
              <li>Emerging Markets</li>
              <li>Build a Business Model</li>
              <li>Expand the Business</li>
            </ul>
          </div>
        </div>
        <ContactFormPage />
      </div>

      <div className="green-slider">
        <h2 className="green-slider-heading">
          International Business Services We Offer
        </h2>

        <div className="services-list-horizontal">
          <div className="service-item">
            <div className="circle">
              <img src="/images/market-research.png" alt="Market Research" />
            </div>
            <p>Market Research</p>
          </div>
          <div className="service-item">
            <div className="circle">
              <img src="/images/industry-setup.png" alt="Industry Setup" />
            </div>
            <p>Complete Industry Setup</p>
          </div>
          <div className="service-item">
            <div className="circle">
              <img src="/images/financial-advice.png" alt="Financial Advice" />
            </div>
            <p>Financial Advice</p>
          </div>
          <div className="service-item">
            <div className="circle">
              <img src="/images/branding.png" alt="Branding & Marketing" />
            </div>
            <p>Branding & Marketing</p>
          </div>
          <div className="service-item">
            <div className="circle">
              <img src="/images/product-development.png" alt="Product Development" />
            </div>
            <p>Product Development</p>
          </div>
          <div className="service-item">
            <div className="circle">
              <img src="/images/international-trade.png" alt="International Trade" />
            </div>
            <p>International Trade</p>
          </div>
        </div>
      </div>

      <div className="blue-slider">
        <div className="left-content">
          <h3 className="about-heading">About International Business Consultants</h3>
          <p className="about-subheading">
            Mudra Global is involved in the import and export of a variety of Apparel around the world. It’s also assists Businesses in worldwide purchasing, distribution and delivery. We have worked in a number of developing countries like Africa and Asia. Mudra Global has enabled businesses to set up their distribution channels and place their products in the target markets. We have teams of trained professionals, agents and partners in countries across the globe. We provide the channel setup and support to companies for product distribution and marketing.
          </p>
          <Link to="/contactus">
            <button className="enquire-now-btn">ENQUIRE NOW</button>
          </Link>
        </div>

        <div className="right-content">
          <ul className="tick-points">
            <li>International Business at a glance</li>
            <li>Assists manufacturing industries to validate their business idea.</li>
            <li>International Business advisory firms work closely with clients to understand their capabilities and passion to develop a concrete business model</li>
            <li>Identify market opportunities and help to conquer them.</li>
            <li>Strategy execution and performance management</li>
            <li>International business advisory firms also provides guidance in Merger and acquisition.</li>
            <li>Complete roadmap to start the manufacturing industry.</li>
          </ul>
        </div>
      </div>
      <CardFormPage />
    </div>
  );
};

export default InternationalBusinessConsultants;
