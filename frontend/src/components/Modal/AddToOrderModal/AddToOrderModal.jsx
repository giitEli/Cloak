import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { addToCartThunk } from "../../../store/order";
import { useCartDisplayContext } from "../../../context/Cart";
import s from "./AddToOrder.module.css";

function AddToOrderModal({ stock }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const { setCartDisplay } = useCartDisplayContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addToCartThunk(stock.id, amount));

    if (response.status === "success") {
      setCartDisplay(true);
      closeModal();
    }
  };

  const round = (value, num) => {
    return Math.round(Number(value) * num) / num;
  };

  const checkValue = (value) => {
    return !isNaN(value) && value >= 0;
  };

  return (
    <form className={s.modal_container} onSubmit={handleSubmit}>
      <label className={s.input_label}>
        How much {stock.symbol} would you like to purchase?
      </label>
      <div className={s.input_area}>
        <input
          className={s.amount_input}
          type="number"
          value={amount}
          onChange={(e) => {
            e.preventDefault();
            const value = Number(e.target.value);
            if (e.target.value === "") {
              setAmount("");
              setPrice("");
              return;
            }
            if (checkValue(e.target.value)) {
              setAmount(value);
              setPrice(value * Number(stock.price));
            }
          }}
        />
        <span className={s.units_for}> Units for $ </span>
        <input
          className={s.price_input}
          type="number"
          value={price}
          onChange={(e) => {
            e.preventDefault();
            const value = Number(e.target.value);
            if (e.target.value === "") {
              setAmount("");
              setPrice("");
              return;
            }
            if (checkValue(e.target.value)) {
              setAmount(value / Number(stock.price));
              setPrice(value);
            }
          }}
        />
      </div>
      <button className={s.submit_button} type="submit" disabled={!amount}>
        Add to Cart
      </button>
    </form>
  );
}

export default AddToOrderModal;
