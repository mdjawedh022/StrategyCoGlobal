import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const dispatch = useDispatch();
//   const location = useLocation();
  const products = useSelector((state) => state.productReducer.products);
//   console.log(products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="product-container">
      {products.map((elem) => {
        return <ProductCard key={elem._id} product={elem} />;
      })}
    </div>
  );
};

export default Product;
