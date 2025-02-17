import React from "react";
import { Routes, Route } from "react-router-dom";
import AgroCommodities from "./AgroCommodities";
import MetalsAndAlloys from "./MetalsAndAlloys";
import Handicrafts from "./Handicrafts";
import OrganicProducts from "./OrganicProducts";
import Decors from "./Decors";

function Services() {
  return (
    <div>
      <Routes>
        <Route path="agro-commodities" element={<AgroCommodities />} />
        <Route path="metals-and-alloys" element={<MetalsAndAlloys />} />
        <Route path="handicrafts" element={<Handicrafts />} />
        <Route path="organic-products" element={<OrganicProducts />} />
        <Route path="decors" element={<Decors />} />
      </Routes>
    </div>
  );
}

export default Services;