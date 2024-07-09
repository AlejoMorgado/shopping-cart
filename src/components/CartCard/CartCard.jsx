import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/productsSlice";
import "./CartCard.scss";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
  };

  return (
    <div>
      <div className="cart-card">
        <div>
          <div className="title">{item.title}</div>
          <img src={item.image} alt="" width={150} height={150} />
        </div>
        <div className="cart-card-content">
          <div className="cart-card-details">
            <div className="cart-card-description">{item.description}</div>

            <div className="cart-card-actions">
              <div className="cart-card-price">$ {item.price}</div>
              <div>
                <div className="cart-card-buttons">
                  <div className="remove-button-container">
                    <button
                      className="remove-button"
                      onClick={() => remove(item.id)}
                    >
                      <span class="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
