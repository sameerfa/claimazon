/* eslint-disable react/jsx-key */
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/urls";
import ProductItem from "../ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`${API_URL}/products/`);
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Grid>
  );
}
