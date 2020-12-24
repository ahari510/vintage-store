import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useCartContext } from "../../context/cart";

export default function CartItem({ id, image, price, title, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h5>{title}</h5>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="cart-btn amount-btn"
          type="button"
          onClick={() => {
            increaseAmount(id);
          }}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseAmount(id, amount);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
