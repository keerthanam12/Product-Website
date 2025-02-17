import React, { useEffect } from "react";
import "../styles/MerchantExporterServices.css";
import ContactFormPage from "./ContactFormPage";
import { Link } from "react-router-dom";
import CardFormPage from "./CardFormPage";

const MerchantExporterServices = () => {
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
    <div className="merchant-exporter-container">
      <div className="content-section-page">
        <div className="slider-section-page">
          <div className="slider-content-page">
            <h1 className="heading-dark-page">
              Merchant Exporter Services
            </h1>
            <p className="content-light-page">
              Mudra Global has been formed to work progressively in the field of Merchant Exporter Services. 
              We offer a secure platform to facilitate the supply of quality products across domestic and foreign countries. 
              As an import-export business, we seek to provide real services to exporters and importers who are committed to the worldwide supply of commodities around the entire world. 
              We deal reasonably with producers, farmers, wholesalers, importers, and other stakeholders to establish a strong global presence in international trade right away.
            </p>
          </div>
        </div>
        <ContactFormPage />
      </div>

      <div className="gray-slider-page">
        <h2 className="gray-slider-heading-page">Our Product Categories</h2>
        <div className="image-gallery-page">
          <div className="gallery-item-page">
            <img src="/images/product1.png" alt="Product 1" />
          </div>
          <div className="gallery-item-page">
            <img src="/images/product2.png" alt="Product 2" />
          </div>
          <div className="gallery-item-page">
            <img src="/images/product3.png" alt="Product 3" />
          </div>
          <div className="gallery-item-page">
            <img src="/images/product4.png" alt="Product 4" />
          </div>
          <div className="gallery-item-page">
            <img src="/images/product5.png" alt="Product 5" />
          </div>
        </div>
      </div>

      <div className="green-slider-page">
        <h2 className="green-slider-heading-page">
          Mudra Global Merchant Exporter Services
        </h2>

        <div className="services-list-horizontal-page">
          <div className="service-item-page">
            <div className="circle-page">
              <img src="/images/import.png" alt="Import & Export" />
            </div>
            <p>Import & Export</p>
          </div>
          <div className="service-item-page">
            <div className="circle-page">
              <img src="/images/product.png" alt="Products Distribution" />
            </div>
            <p>Products Distribution</p>
          </div>
          <div className="service-item-page">
            <div className="circle-page">
              <img src="/images/market.png" alt="Market analysis" />
            </div>
            <p>Market analysis</p>
          </div>
          <div className="service-item-page">
            <div className="circle-page">
              <img src="/images/international.png" alt="International Business Consulting" />
            </div>
            <p>International Business Consulting</p>
          </div>
        </div>
      </div>

      <div className="blue-slider-page">
        <div className="content-page">
          <h3 className="about-heading-page">Apparel Exporters & Supplier</h3>
          <p className="about-subheading-page">
            Mudra Global is involved in the import and export of a variety of food and commodities around the world. Our company works with a number of farmers, agro suppliers, distributors and manufacturers around the world to supply the best quality items. We are providing import and export services on multiple continents around the world. We strive to source quality products and agro-commodities from our suppliers. We deal reasonably with producers, farmers, wholesalers, importers, and other stakeholders to establish a strong global presence in international trade right away. Being an import export company, our final aspiration is to close the gap in the foreign market between buyers and sellers. In order to offer the highest quality of merchandise, ensure customer satisfaction and cultivate customer loyalty, we guarantee assistance by qualified consultants.
          </p>
          <Link to="/contactus">
            <button className="enquire-now-btn-page">ENQUIRE NOW</button>
          </Link>
        </div>
      </div>
      <CardFormPage />
    </div>
  );
};

export default MerchantExporterServices;
