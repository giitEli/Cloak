import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { editOrderInCartThunk } from "../../../store/order";
import s from "./EditOrder.module.css";

function EditOrderModal({ stock }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [amount, setAmount] = useState(Number(stock.amount));

  console.log({stock})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(editOrderInCartThunk(stock.id, amount));

    if (response.status === "success") {
      closeModal();
    }
  };

  return (
    <form className={s.review_form} onSubmit={handleSubmit}>
      <label>
        How much {stock.symbol} would you like to purchase?
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            e.preventDefault();
            setAmount(e.target.value);
          }}
        />
      </label>
      <button type="submit" disabled={!amount}>
        Confirm changes
      </button>
    </form>
  );
}

export default EditOrderModal;
