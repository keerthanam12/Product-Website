import React from "react";
import "../styles/Box.css"; 

const Box = () => {
  return (
    <section className="box-section">
      <div className="box-slider">
        <h2 className="box-heading">Mudra Global’s role in International trade</h2>
        <div className="box-content">
          <img src="/images/global.jpg" alt="International Trade" className="box-image" />
          <p className="box-text">
            International import-Export Trading company. In global trade, Mudra Global plays an important role by following requirements and reinforcement of quantitative thresholds in order to increase the import and export of goods. We are devoted to the distribution and procurement of goods that make us genuinely valuable in the international trade market. The preparation of a stable platform for buyers and sellers for exporting and importing goods is the key role we play in the market for foreign trade.

            Serving as an export import agent in the area of foreign trade, it is our responsibility to deal on account of the exporters and importer with operating in the international trading industry. The roles we play as an export agent in the international trade to reach the prospective clients, secure agreements, adapt marketing blends, systems of delivery, records, and much more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Box;
