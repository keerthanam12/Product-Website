import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import InternationalBusinessConsultants from "./components/InternationalBusinessConsultants";
import MerchantExporterServices from "./components/MerchantExporterServices";
import Products from "./components/Products";
import AgroCommodities from "./components/AgroCommodities";
import MetalsAndAlloys from "./components/MetalsAndAlloys";
import Handicrafts from "./components/Handicrafts";
import OrganicProducts from "./components/OrganicProducts";
import Decors from "./components/Decors";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/international-business-consultants" element={<InternationalBusinessConsultants />} />
            <Route path="/services/merchant-exporter-services" element={<MerchantExporterServices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/agro-commodities" element={<AgroCommodities />} />
            <Route path="/products/metals-and-alloys" element={<MetalsAndAlloys />} />
            <Route path="/products/handicrafts" element={<Handicrafts />} />
            <Route path="/products/organic-products" element={<OrganicProducts />} />
            <Route path="/products/decors" element={<Decors />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
