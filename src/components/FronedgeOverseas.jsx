import React from "react";
import "../styles/FronedgeOverseas.css";

const FronedgeOverseas = () => {
  const sections = [
    {
      title: "Import & Export",
      description:
        "Mudra Global is involved in the import export of variety of food and commodity around the world.",
      image: "/images/f1.png",
    },
    {
      title: "Products Distribution",
      description:
        "Mudra Global also assists businesses in worldwide purchasing, delivery, and analysis of commodity valuation.",
      image: "/images/f2.png", 
    },
    {
      title: "Market Analysis",
      description:
        "We provide our clients with the latest opportunities, insights, and perspectives to facilitate better decision-making.",
      image: "/images/f3.png",
    },
    {
      title: "International Business Consulting",
      description:
        "Establishing a business abroad can be a complex task. We guide clients through complex regulations and policies of a local country.",
      image: "/images/f4.png", 
    },
  ];

  return (
    <div className="fronedge-overseas">
      <h1 className="fronedge-heading">Fronedge Overseas Services</h1>

      <div className="fronedge-slider">
        {sections.map((section, index) => (
          <div key={index} className="slider-item">
            <img
              src={section.image}
              alt={section.title}
              className="slider-logo"
            />
            <h2 className="slider-title">{section.title}</h2>
            <p className="slider-description">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FronedgeOverseas;
