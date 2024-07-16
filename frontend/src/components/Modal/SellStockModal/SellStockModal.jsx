import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { sellStockThunk } from "../../../store/portfolio";
import s from "./SellStock.module.css";

function SellStockModal({ portfolioId, stock }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sellStockThunk(portfolioId, stock.id, amount));
    closeModal();
  };

  return (
    <form className={s.review_form} onSubmit={handleSubmit}>
      <label>
        How much {stock.name} would you like to sell?
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            e.preventDefault();
            if (Number(e.target.value) < 0) {
              setAmount(0);
            } else if (Number(e.target.value) > stock.amount) {
              setAmount(stock.amount);
            } else {
              setAmount(Number(e.target.value));
            }
          }}
        />
      </label>
      <button type="submit" disabled={!amount}>
        Sell stock
      </button>
    </form>
  );
}

export default SellStockModal;
