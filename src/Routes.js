import React from "react";
import Ads from "pages/Ads";
import HomepageVTwo from "pages/HomepageVTwo";
import Cart from "pages/Cart";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductDetails from "pages/ProductDetails";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/homepagevtwo" element={<HomepageVTwo />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
