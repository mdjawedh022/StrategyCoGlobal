import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Details from "../components/Details";

const MianRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
};

export default MianRoute;
