import React, { Children } from "react";
import Loading from "../components/Loading";
import { useProudctContext } from "../context/products";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products } = useProudctContext();

  if (loading) {
    return <Loading />;
  }
  return <ProductList title="our products" products={products} />;
}
