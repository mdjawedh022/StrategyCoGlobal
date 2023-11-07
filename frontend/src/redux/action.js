import axios from "axios";
import {
  GET_PRODUCTID_FAILURE,
  GET_PRODUCTID_REQUEST,
  GET_PRODUCTID_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

const getProductRequestAction = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const getProductSuccessAction = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

const getProductFailureAction = () => {
  return { type: GET_PRODUCT_FAILURE };
};

export const getProduct = () => (dispatch) => {
  dispatch(getProductRequestAction());

  axios
    .get("https://calm-mite-loincloth.cyclic.app/products")
    .then((res) => {
      dispatch(getProductSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getProductFailureAction());
    });
};

export const getProductByid = (id) => (dispatch) => {
  dispatch(getProductRequestAction());
  axios
    .get(`https://calm-mite-loincloth.cyclic.app/products/${id}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCTID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(getProductFailureAction());
    });
};
