import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/productsSlice";

import "./Card.scss";

const Card = ({ product }) => {
  const cart = useSelector((state) => state.products.cart);
  const img = product.image;
  const price = product.price;
  const description = product.description;
  const name = product.title;
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(product));
  };

  const remove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-image">
          <p className="title">{name}</p>
          <img src={img} alt="product" />
        </div>
        <p className="card-description">
          {description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <div className="card-actions">
          {cart.some((item) => item.id === product.id) ? (
            <button onClick={remove} className="remove-btn">
              Remove Item
            </button>
          ) : (
            <button onClick={add} className="add-btn">
              Add to Cart
            </button>
          )}
          <span className="card-price">$ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
