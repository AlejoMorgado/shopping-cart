import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCartFromLocalStorage } from "../../redux/slices/productsSlice";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div>
        <div className="cart-container">
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))}
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-content">
                  <div>
                    <h1 className="empty-cart-title">Cart is Empty !!</h1>
                  </div>
                  <div className="empty-cart-button-container">
                    <button className="continue-shopping-button">
                      <Link to="/explore">Explore</Link>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cart-summary">
                <div>
                  <h1 className="total-items">TOTAL ITEMS : {cart.length}</h1>
                  <h1 className="total-price">TOTAL PRICE : $ {total}</h1>
                </div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
