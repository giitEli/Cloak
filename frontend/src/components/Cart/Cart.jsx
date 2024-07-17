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
import { useCartDisplayContext } from "../../context/Cart";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const { cartDisplay, setCartDisplay } = useCartDisplayContext();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.orders.userOrders);
  const portfolios = useSelector((state) => state.portfolios.userPortfolios);
  const [selectedPortfolio, setSelectedPortfolio] = useState();

  const getTotal = (cart) => {
    let total = 0;
    for (const stock of Object.values(cart)) {
      total += Number(stock.price) * Number(stock.amount);
    }
    return total;
  };

  const checkTotal = (cart, portfolio) => {
    if (!portfolio) return false;
    if (!Object.keys(cart).length) return false;
    if (Number(portfolio.balance) < getTotal(cart)) return false;
    return true;
  };

  useEffect(() => {
    dispatch(getOrdersThunk());
    dispatch(getPortfoliosThunk());
  }, []);

  useEffect(() => {
    if (!selectedPortfolio) {
      setSelectedPortfolio(Object.keys(portfolios)[0]);
    }
  }, [portfolios]);

  return (
    <div className={s.cart_container}>
      <div className={s.cart_section_1}>
        <span>
          <span className={s.cart_text}>Cart</span>
          <FaCartShopping />
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCartDisplay(false);
          }}
        >
          X
        </button>
      </div>
      <div className={s.cart_section_2}>
        <span className={s.portfolio_text}>Portfolio</span>
        {selectedPortfolio && (
          <select
            className={s.portfolio_select}
            defaultValue={"Select a portfolio"}
            onChange={(e) => {
              e.preventDefault();
              setSelectedPortfolio(e.target.value);
            }}
          >
            {Object.values(portfolios).map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <ul className={s.cart_section_3}>
        {Object.values(cart).map((stock) => {
          return (
            <li key={stock.id} className={s.order_item_container}>
              <div className={s.order_header}>
                <div className={s.order_header_left}>
                  <span className={s.order_stock_name}>{stock.name}</span>
                  <span>{stock.symbol}</span>
                </div>
                <img src={stock.logo} className={s.order_logo} />
              </div>
              <div className={s.order_body}>
                <div className={s.order_stock_amount}>
                  <span>Amount</span>
                  <span>{stock.amount}</span>
                </div>
                <div className={s.order_stock_subtotal}>
                  <span>Subtotal</span>
                  <span>${Number(stock.amount) * Number(stock.price)}</span>
                </div>
              </div>
              <div className={s.order_footer}>
                <EditOrderModal stock={stock} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeFromCartThunk(stock.id));
                  }}
                >
                  Remove from cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={s.cart_section_4}>
        <div className={s.cart_section_4_top}>
          <span className={s.portfolio_balance}>
            Balance: $
            {portfolios[selectedPortfolio]
              ? portfolios[selectedPortfolio].balance
              : "No portfolio selected"}
          </span>
          <span>Subtotal: ${getTotal(cart)}</span>
          {portfolios[selectedPortfolio] &&
            Number(portfolios[selectedPortfolio].balance) < getTotal(cart) && (
              <p className={s.error}>
                Cart total is greater then portfolio balance.
              </p>
            )}
        </div>
        <div className={s.cart_section_4_bottom}>
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
            disabled={!checkTotal(cart, portfolios[selectedPortfolio])}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
