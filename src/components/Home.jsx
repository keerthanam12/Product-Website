import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Header from "./Header";
import ContentSlider from "./ContentSlider";
import OurProductCategories from "./OurProductCategories";
import FronedgeOverseas from "./FronedgeOverseas";
import Company from "./Company";
import Box from "./Box";
import ContactForm from "./ContactForm";
import CardForm from "./CardForm";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
];

const services = [
  "International Business Consultants",
  "Merchant Exporter Services",
];
const products = [
  "Agro Commodities",
  "Metal and Alloys",
  "Handicrafts",
  "Organic Products",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderItems, setSliderItems] = useState([]);
  const [sliderTitle, setSliderTitle] = useState("");

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(slideInterval);
  }, []);

  const handleServicesClick = () => {
    setSliderItems(services);
    setSliderTitle("Our Services");
    setShowSlider(true);
  };

  const handleProductsClick = () => {
    setSliderItems(products);
    setSliderTitle("Our Products");
    setShowSlider(true);
  };

  const closeSlider = () => {
    setShowSlider(false);
  };

  return (
    <div>
      <Header onServicesClick={handleServicesClick} onProductsClick={handleProductsClick} />

      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
              display: index === currentSlide ? "block" : "none",
            }}
          >
            {index === currentSlide && (
              <div className="theme-overlay">
                <h1 className="theme-title">Flourishing Together</h1>
                <div className="card-container">
                  <p className="theme-subtitle">
                    Delivering Quality Products Around The World
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showSlider && (
        <div className="slider-popup">
          <div className="slider-header">
            <h2>{sliderTitle}</h2>
            <button className="close-button" onClick={closeSlider}>
              Close
            </button>
          </div>
          <ul>
            {sliderItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <ContentSlider />
      <OurProductCategories />
      <FronedgeOverseas />
      <Company />
      <Box />
      <ContactForm />
      <CardForm />
    </div>
  );
};

export default Home;
