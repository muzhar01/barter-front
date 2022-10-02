import React from "react";
import Cart from "pages/Cart";
import ProductDetails from "pages/ProductDetails";
import Ads from "pages/Ads";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import Home1 from "pages/Home1";
import HomepageVTwo from "pages/HomepageVTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepagevtwo" element={<HomepageVTwo />} />
        <Route path="/home1" element={<Home1 />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/ads" element={<Ads />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
