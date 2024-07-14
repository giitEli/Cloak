import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { updatePortfolioThunk } from "../../../store/portfolio";
import s from "./UpdatePortfolio.module.css";

function UpdatePortfolioModal({ currentPortfolio }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [name, setName] = useState(currentPortfolio.name);
  const [balance, setBalance] = useState(currentPortfolio.balance);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const portfolioData = { name, balance };
    const response = await dispatch(
      updatePortfolioThunk(currentPortfolio.id, portfolioData)
    );
    if (response.status === "success") {
      closeModal();
    }
  };

  return (
    <form className={s.review_form} onSubmit={handleSubmit}>
      <label>
        Enter a name for your new portfolio.
        <input
          type="text"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Set a balance for your portfolio.
        <input
          type="number"
          defaultValue={0}
          value={balance}
          onChange={(e) => {
            e.preventDefault();
            if (e.target.value >= 0) {
              setBalance(e.target.value);
            }
          }}
        />
      </label>
      <button type="submit" disabled={!name}>
        Update Portfolio
      </button>
    </form>
  );
}

export default UpdatePortfolioModal;
