import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import url from "../utils/URL";
import { featuredProducts } from "../utils/helpers";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/products`)
      .then((response) => {
        const featured = featuredProducts(response.data);
        setProducts(response.data);
        setFeatured(featured);
      })
      .catch((error) => setLoading(false));
    setLoading(false);
  }, []);
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProudctContext = () => {
  return useContext(ProductContext);
};
