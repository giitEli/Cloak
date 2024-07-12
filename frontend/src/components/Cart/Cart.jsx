import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrdersThunk } from "../../store/order";
import { removeFromCartThunk } from "../../store/order";
import s from "./Cart.module.css";

const Cart = ({ setShowCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.orders.userOrders);

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  return (
    <div className={s.cart_container}>
      <div className={s.cart_header_container}>
        <span>Cart</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowCart(false);
          }}
        >
          X
        </button>
      </div>
      <ul>
        {Object.values(cart).map((stock) => {
          return (
            <li key={stock.id} className={s.order_item_container}>
              <span>{stock.name}</span>
              <span>{stock.symbol}</span>
              <span>{stock.amount} units</span>
              <span>${Number(stock.amount) * Number(stock.price)}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(removeFromCartThunk(stock.id));
                }}
              >
                Remove from cart.
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
