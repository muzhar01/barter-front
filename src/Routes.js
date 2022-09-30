import React from "react";
import ProductList from "pages/ProductList";
import HomepageVTwo from "pages/HomepageVTwo";
import Checkout from "pages/Checkout";
import HomepageVOne from "pages/HomepageVOne";
import Cart from "pages/Cart";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductDetails from "pages/ProductDetails";
import HomepageVThree from "pages/HomepageVThree";
import Completed from "pages/Completed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageVOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/homepagevthree" element={<HomepageVThree />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/homepagevtwo" element={<HomepageVTwo />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
