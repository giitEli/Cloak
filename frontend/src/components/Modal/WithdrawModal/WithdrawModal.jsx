import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { updatePortfolioThunk } from "../../../store/portfolio";
import PulseLoader from "react-spinners/PulseLoader";
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
    <form
      className={s.create_portfolio_modal_container}
      onSubmit={handleSubmit}
    >
      <label className={s.label}>How much would you like to withdraw?</label>
      <input
        className={s.input}
        type="text"
        value={balance}
        onChange={(e) => {
          e.preventDefault();
          const value = Number(e.target.value);
          if (e.target.value === "") {
            setBalance("");
          }
          if (!isNaN(value)) {
            if (value < 0) {
              setBalance(0);
            }
            if (value > currentPortfolio.balance) {
              setBalance(currentPortfolio.balance);
            } else {
              setBalance(e.target.value);
            }
          }
        }}
      />
      <button className={s.button} type="submit" disabled={isNaN(balance)}>
        {isLoading ? (
          <PulseLoader color="grey" size="12px" />
        ) : (
          "Update portfolio"
        )}
      </button>
    </form>
  );
}

export default WithdrawModal;
