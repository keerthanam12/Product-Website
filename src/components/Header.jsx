import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleMouseEnter = (menu) => {
    if (menu === "services") setShowServices(true);
    if (menu === "products") setShowProducts(true);
  };

  const handleMouseLeave = (menu) => {
    if (menu === "services") setShowServices(false);
    if (menu === "products") setShowProducts(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <span className="content">Home</span>
            </Link>
          </li>

          <li
            className="dropdown-parent"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={() => handleMouseLeave("services")}
          >
            <Link to="/services">
              <span className="content">Services</span>
            </Link>
            {showServices && (
              <div className="dropdown">
                <div className="dropdown-pointer"></div>
                <p>
                  <Link to="/services/international-business-consultants">
                    <span className="content">International Business Consultants</span>
                  </Link>
                </p>
                <p>
                  <Link to="/services/merchant-exporter-services">
                    <span className="content">Merchant Exporter Services</span>
                  </Link>
                </p>
              </div>
            )}
          </li>

          <li
            className="dropdown-parent"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={() => handleMouseLeave("products")}
          >
            <button className="dropdown-toggle">
              <span className="content">Products</span>
            </button>
            {showProducts && (
              <div className="dropdown">
                <div className="dropdown-pointer"></div>
                <p>
                  <Link to="/products/agro-commodities">
                    <span className="content">Agro Commodities</span>
                  </Link>
                </p>
                <p>
                  <Link to="/products/metals-and-alloys">
                    <span className="content">Metals and Alloys</span>
                  </Link>
                </p>
                <p>
                  <Link to="/products/handicrafts">
                    <span className="content">Handicrafts</span>
                  </Link>
                </p>
                <p>
                  <Link to="/products/organic-products">
                    <span className="content">Organic Products</span>
                  </Link>
                </p>
                <p>
                  <Link to="/products/decors">
                    <span className="content">Decors</span>
                  </Link>
                </p>
              </div>
            )}
          </li>

          <li>
            <Link to="/contactus">
              <span className="content">Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
