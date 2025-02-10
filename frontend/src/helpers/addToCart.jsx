import React from "react";
import SummaryApi from "../common";
import toast from "react-hot-toast";

const addToCart = async (e, id) => {
  e?.preventDefault();
  e?.stopPropagation();
  //response , addToCartProduct,
  const response = await fetch(SummaryApi.addToCartProduct.url, {
    method: SummaryApi.addToCartProduct.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: id,
    }),
  });
  const dataResponse = await response.json();
  if (dataResponse.success) {
    toast.success(dataResponse.message);
  } else {
    toast.error(dataResponse.message);
  }
  return dataResponse;
};

export default addToCart;
