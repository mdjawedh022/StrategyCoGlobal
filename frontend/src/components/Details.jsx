import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByid } from "../redux/action";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetails, isLoading,isError } = useSelector((state) => state.productReducer);
  console.log(productDetails);
  useEffect(() => {
    dispatch(getProductByid(id));
  }, [dispatch, id]);

  return (
    <div className="product-detail">
      <div className="img">
        <img src={productDetails?.Poster} alt="img" />
      </div>
      <div className="text">
        <h1>{productDetails?.Title}</h1>
        <h2>imdbId:-{productDetails?.imdbId}</h2>
        <h3>Year:-{productDetails?.Year}</h3>
        <h4>Type:-{productDetails?.Type}</h4>
        <button onClick={()=>alert("Booked Successful!")}>Book</button>
      </div>
    </div>
  );
};

export default Details;


// "_id": "654a0b16fa6cf205735ec670",
// "Title": "Captain America: The First Avenger",
// "Year": "2011",
// "imdbID": "tt0458339",
// "Type": "movie",
// "Poster"