import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { updatePortfolioThunk } from "../../../store/portfolio";
import PulseLoader from "react-spinners/PulseLoader";
import { priceFunc } from "../helper";
import s from "./WithdrawModal.module.css";

function WithdrawModal({ currentPortfolio }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [balance, setBalance] = useState("");
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await dispatch(
      updatePortfolioThunk(currentPortfolio.id, { balance: `-${balance}` })
    );
    if (response.status === "success") {
      closeModal();
    }

    setIsLoading(false);
  };

  return (
    <form className={s.modal_container} onSubmit={handleSubmit}>
      <label className={s.input_label}>
        How much would you like to withdraw?
      </label>
      <div className={s.input_area}>
        <span className={s.dollar_sign}>$ </span>
        <input
          className={s.amount_input}
          type="text"
          value={balance}
          onChange={(e) => {
            e.preventDefault();
            setBalance((prev) => {
              if (Number(e.target.value) > currentPortfolio.balance) {
                return currentPortfolio.balance;
              } else {
                return priceFunc(prev, e.target.value);
              }
            });
          }}
        />
      </div>
      <button
        className={s.submit_button}
        type="submit"
        disabled={isNaN(balance) || Number(balance) > currentPortfolio.balance}
      >
        {isLoading ? <PulseLoader color="grey" size="12px" /> : "Withdraw"}
      </button>
    </form>
  );
}

export default WithdrawModal;
