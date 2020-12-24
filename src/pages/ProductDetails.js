import React from "react";
import { useParams } from "react-router-dom";
import { useProudctContext } from "../context/products";
import { useCartContext } from "../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useProudctContext();
  const { addToCart } = useCartContext();
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt="image" className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              addToCart(product);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
