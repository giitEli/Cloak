import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { addToCartThunk } from "../../../store/order";
import { editOrderInCartThunk } from "../../../store/order";
import { useCartDisplayContext } from "../../../context/Cart";
import { PulseLoader } from "react-spinners";
import s from "./Order.module.css";
import { roundPrice, roundAmount, priceFunc, amountFunc } from "../helper";

function OrderModal({ stock, type, currentAmount }) {
  console.log(currentAmount);
  const buttonText = type === "purchase" ? "Add to Cart" : "Update Order";
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [amount, setAmount] = useState(currentAmount ? currentAmount : "");
  const [price, setPrice] = useState(
    currentAmount ? roundPrice(stock.price, currentAmount) : ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const { setCartDisplay } = useCartDisplayContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let response;
    if (type === "purchase") {
      response = await dispatch(addToCartThunk(stock.id, amount));
    } else {
      response = await dispatch(editOrderInCartThunk(stock.id, amount));
    }
    if (response.status === "success") {
      setIsLoading(false);
      setCartDisplay(true);
      closeModal();
    }
  };

  return (
    <form className={s.modal_container} onSubmit={handleSubmit}>
      <label className={s.input_label}>
        How much {stock.symbol} would you like to purchase?
      </label>
      <div className={s.input_area}>
        <input
          className={s.amount_input}
          type="text"
          value={amount}
          onChange={(e) => {
            e.preventDefault();
            const newAmount = amountFunc(amount, e.target.value);
            setAmount(newAmount);
            if (newAmount === "" || newAmount === ".") {
              setPrice("");
            } else {
              setPrice(roundPrice(stock.price, newAmount));
            }
          }}
        />
        <span className={s.units_for}> Units for $ </span>
        <input
          className={s.price_input}
          type="text"
          value={price}
          onChange={(e) => {
            e.preventDefault();
            const newPrice = priceFunc(price, e.target.value);
            setPrice(newPrice);
            if (newPrice === "" || newPrice === ".") {
              setAmount("");
            } else {
              setAmount(roundAmount(stock.price, newPrice));
            }
          }}
        />
      </div>
      <button
        className={s.submit_button}
        type="submit"
        disabled={!Number(amount) || !Number(price)}
      >
        {isLoading ? <PulseLoader color="grey" size="10px" /> : buttonText}
      </button>
    </form>
  );
}

export default OrderModal;
