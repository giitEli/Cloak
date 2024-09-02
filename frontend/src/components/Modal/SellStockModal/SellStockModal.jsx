import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { sellStockThunk } from "../../../store/portfolio";
import {
  newAmountFunc,
  newPriceFunc,
} from "../helper";
import s from "./SellStock.module.css";

function SellStockModal({ portfolioId, stock }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      sellStockThunk(portfolioId, stock.id, amount)
    );

    if (response.status === "success") {
      closeModal();
    }
  };

  // const checkValue = (value) => {
  //   return !isNaN(value) && value >= 0;
  // };

  return (
    <form className={s.modal_container} onSubmit={handleSubmit}>
      <label className={s.input_label}>
        How much {stock.symbol} would you like to sell?
      </label>
      <div className={s.input_area}>
        <input
          className={s.amount_input}
          type="text"
          value={amount}
          onChange={(e) => {
            e.preventDefault();
            const newData = newAmountFunc(
              amount,
              e.target.value,
              stock.amount,
              stock.price
            );
            setPrice(newData.price);
            setAmount(newData.amount);
          }}
        />
        <span className={s.units_for}> Units for $ </span>
        <input
          className={s.price_input}
          type="text"
          value={price}
          onChange={(e) => {
            e.preventDefault();
            const newData = newPriceFunc(
              price,
              e.target.value,
              stock.amount,
              stock.price
            );
            setPrice(newData.price);
            setAmount(newData.amount);
          }}
        />
      </div>
      <button
        className={s.submit_button}
        type="submit"
        disabled={!Number(amount) || !Number(price)}
      >
        Sell
      </button>
    </form>
  );
}

export default SellStockModal;
