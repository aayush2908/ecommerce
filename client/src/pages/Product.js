import React, { useEffect, useState } from "react";
import { getProduct } from "../functions/product";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});

  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, []);

  const loadSingleProduct = () => {
    getProduct(slug).then((res) => setProduct(res.data));
  };
};

export default Product;
