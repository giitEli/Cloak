import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { createPortfolioThunk } from "../../../store/portfolio";
import { addToCartThunk } from "../../../store/order";
import s from "./AddToOrder.module.css";

function AddToOrderModal({ stock }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(addToCartThunk(stock.id, amount));

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
        Add to Cart
      </button>
    </form>
  );
}

export default AddToOrderModal;
