import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  checkOutThunk,
  clearCartThunk,
  getOrdersThunk,
} from "../../store/order";
import { removeFromCartThunk } from "../../store/order";
import s from "./Cart.module.css";
import OrderModal from "../Modal/OrderModal";
import { getPortfoliosThunk } from "../../store/portfolio";
import { useCartDisplayContext } from "../../context/Cart";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import CreatePortfolioModal from "../Modal/CreatePortfolioModal";

/////////////////////////////////////////////

const Cart = () => {
  const { setCartDisplay } = useCartDisplayContext();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.orders.userOrders);
  const portfolios = useSelector((state) => state.portfolios.userPortfolios);

  const [selectedPortfolio, setSelectedPortfolio] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //////////////////

  const getTotal = (cart) => {
    let total = 0;
    for (const stock of Object.values(cart)) {
      total += Number(stock.price) * Number(stock.amount);
    }
    return total;
  };

  //initial render useEffects
  useEffect(() => {
    dispatch(getOrdersThunk());
    dispatch(getPortfoliosThunk());
  }, []);

  //if portfolio is deleted auto-select first portfolio
  useEffect(() => {
    if (!selectedPortfolio || !portfolios[selectedPortfolio]) {
      setSelectedPortfolio(Object.keys(portfolios)[0]);
    }
  }, [portfolios]);

  //set errors for cart as order or portfolio is updated
  useEffect(() => {
    const newErrors = {};
    //cart is empty
    if (!Object.keys(cart).length) {
      newErrors.empty = "Cart is empty";
    }
    //no portfolio selected
    if (!selectedPortfolio || !portfolios[selectedPortfolio]) {
      newErrors.portfolio = "No portfolio selected";
      setErrors(newErrors);
      return;
    }
    //cart cost more then portfolio
    if (
      portfolios[selectedPortfolio] &&
      getTotal(cart) > portfolios[selectedPortfolio].balance
    ) {
      newErrors.balance = "Cart total is greater then portfolio balance";
    }
    setErrors(newErrors);
  }, [cart, selectedPortfolio, portfolios]);

  /////////////////////////

  return (
    <div className={s.cart_container}>
      <div className={s.cart_section_1}>
        <span>
          <span className={s.cart_text}>Cart</span>
          <FaCartShopping />
        </span>
        <IoClose
          className={s.close_cart_x}
          onClick={(e) => {
            e.preventDefault();
            setCartDisplay(false);
          }}
        />
      </div>
      <div className={s.cart_section_2}>
        <span className={s.portfolio_text}>Portfolio</span>
        {Boolean(Object.keys(portfolios).length) && (
          <select
            className={s.portfolio_select}
            defaultValue="Select a portfolio"
            placeholder="Select a portfolio"
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
        {!Object.keys(portfolios).length && (
          <CreatePortfolioModal
            className={`${s.create_portfolio_button} blue_button`}
          />
        )}
      </div>
      <ul className={s.cart_section_3}>
        {Object.values(cart).map((stock) => {
          return (
            <li key={stock.id} className={s.order_item_container}>
              <div className={s.order_header}>
                <div className={s.order_header_left}>
                  <span className={s.order_stock_name}>{stock.name}</span>
                  <span className={s.order_stock_symbol}>{stock.symbol}</span>
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
                <OrderModal
                  stock={stock}
                  className={`${s.change_order_button} blue_button`}
                  type="edit"
                  currentAmount={stock.amount}
                />
                <button
                  className={`${s.remove_from_cart_button} red_button`}
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
            {portfolios[selectedPortfolio]
              ? `Balance: $${portfolios[selectedPortfolio].balance}`
              : " No portfolio selected"}
          </span>
          <span className={s.cart_total_text}>Total: ${getTotal(cart)}</span>

          {isSubmitted && errors.empty && (
            <p className={s.error}>{errors.empty}</p>
          )}
          {isSubmitted && errors.portfolio && (
            <p className={s.error}>{errors.portfolio}</p>
          )}
          {isSubmitted && errors.balance && (
            <p className={s.error}>{errors.balance}</p>
          )}
        </div>
        <div className={s.cart_section_4_bottom}>
          <button
            className={`${s.clear_cart_button} red_button`}
            onClick={(e) => {
              e.preventDefault();
              dispatch(clearCartThunk());
            }}
          >
            Clear Cart
          </button>
          <button
            className={`${s.checkout_button} green_button`}
            disabled={isSubmitted && Object.keys(errors).length}
            onClick={(e) => {
              e.preventDefault();
              setIsSubmitted(true);
              if (!Object.keys(errors).length) {
                setIsSubmitted(false);
                dispatch(checkOutThunk(selectedPortfolio));
              }
            }}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
