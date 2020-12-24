import React from "react";
import { useProudctContext } from "../../context/products";
import Loading from "../Loading";
import ProductList from "./ProductList";

export default function FeaturedProducts() {
  const { loading, featured } = useProudctContext();
  console.log(featured);

  if (loading) {
    return <Loading />;
  }
  return <ProductList title="our featured product" products={featured} />;
}
