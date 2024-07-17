import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { editOrderInCartThunk } from "../../../store/order";
import s from "./EditOrder.module.css";

function EditOrderModal({ stock }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [amount, setAmount] = useState(stock.amount);
  const [price, setPrice] = useState(
    Number(stock.amount) * Number(stock.price)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(editOrderInCartThunk(stock.id, amount));

    if (response.status === "success") {
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
              setAmount(round(value, 1000));
              setPrice(round(value * Number(stock.price), 100));
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
              setAmount(round(value / Number(stock.price), 1000));
              setPrice(round(value, 100));
            }
          }}
        />
      </div>
      <button className={s.submit_button} type="submit" disabled={!amount}>
        Change order
      </button>
    </form>
  );
}

export default EditOrderModal;
