import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.productReducer
  );
  const [searchParams] = useSearchParams();
// const fiterCat=products.filter((elem)=>elem.Cat==)
  useEffect(() => {
   
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading.......</h1>;
  }
  if (isError) {
    return (
      <h1 style={{ marginTop: "7rem", font: "2rem" }}>
        Something Went wrong..
      </h1>
    );
  }

  return (
    <div>
      <div className="container">
      <Sidebar/>
      </div>
      <div className="product-container">
        {products?.length === 0 ? (
          <h1>No Data Available</h1>
        ) : (
          products?.map((elem) => {
            return <ProductCard key={elem._id} product={elem} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;

