import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  checkOutThunk,
  clearCartThunk,
  getOrdersThunk,
} from "../../store/order";
import { removeFromCartThunk } from "../../store/order";
import s from "./Cart.module.css";
import EditOrderModal from "../Modal/EditOrderModal";
import { getPortfoliosThunk } from "../../store/portfolio";

const Cart = ({ setShowCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.orders.userOrders);
  const portfolios = useSelector((state) => state.portfolios.userPortfolios);
  const [selectedPortfolio, setSelectedPortfolio] = useState();

  useEffect(() => {
    dispatch(getOrdersThunk());
    dispatch(getPortfoliosThunk());
  }, []);

  useEffect(() => {
    if (!selectedPortfolio) {
      setSelectedPortfolio(Object.keys(portfolios)[0]);
    }
    console.log(selectedPortfolio);
  }, [portfolios]);

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
        {selectedPortfolio && (
          <select
            onChange={(e) => {
              e.preventDefault();
              setSelectedPortfolio(e.target.value);
              console.log(e.target.value);
            }}
          >
            {" "}
            Pick a portfolio
            {Object.values(portfolios).map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        )}

        {Object.values(cart).map((stock) => {
          return (
            <li key={stock.id} className={s.order_item_container}>
              <span>{stock.name}</span>
              <span>{stock.symbol}</span>
              <span>{stock.amount} units</span>
              <span>${Number(stock.amount) * Number(stock.price)}</span>
              <EditOrderModal stock={stock} />
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
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(clearCartThunk());
          }}
        >
          Clear Cart
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(checkOutThunk(selectedPortfolio));
          }}
        >
          purchase
        </button>
      </ul>
    </div>
  );
};

export default Cart;
