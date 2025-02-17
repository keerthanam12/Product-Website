import React from "react";
import "../styles/OurProductCategories.css";

const OurProductCategories = () => {
  const products = [
    {
      name: "Agro Commodities",
      image: "/images/agro-commodities.png",
    },
    {
      name: "Metals and Alloys",
      image: "/images/metal-alloys.png",
    },
    {
      name: "Handicrafts",
      image: "/images/handicrafts.png",
    },
    {
      name: "Organic Products",
      image: "/images/organic-products.png",
    },
    {
      name: "Decors",
      image: "/images/decors.png",
    }
  ];

  return (
    <section className="product-categories">
      <h2>Our Product Categories</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProductCategories;
