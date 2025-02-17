import React from 'react';
import '../styles/ContentSlider.css';

const ContentSlider = () => {
  return (
    <div className="page-container">
      <div className="content-slider-container">
        <div className="slider-content">
          <h1 className="slider-heading">Global Trading Distribution & Consulting</h1>
          <p className="slider-text">
            Mudra Global has been formed to work progressively in the field of import & export,
            business. We offer a secure platform to facilitate the supply of quality products
            across domestic and foreign countries. As an import & export business, we seek to
            provide real services to exporters and importers who are committed to the worldwide
            supply of commodities around the entire world.
          </p>
        </div>

        <div className="slider-image">
          <img src="/images/earth.jpg" alt="Earth" />
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
