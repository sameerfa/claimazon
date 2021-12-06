/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import data from "../utils/data";
//import models from "../models";

export const allProducts = () => {
  const products = data.products.map(
    ({
      description,
      image,
      itemsInStock,
      rating,
      tags,
      reviews,
      recommendations,
      ...item
    }) => item
  );
  return JSON.stringify(products);
};

export const singleProduct = (title) => {
  const product = data.products.find((item) => item.title === title);
  return product;
};

export default { allProducts, singleProduct };
