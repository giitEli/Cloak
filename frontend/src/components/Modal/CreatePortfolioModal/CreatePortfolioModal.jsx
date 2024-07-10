import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { createPortfolioThunk } from "../../../store/portfolio";
import s from "./CreatePortfolio.module.css";

function CreatePortfolioModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [name, setName] = useState();
  const [balance, setBalance] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const portfolioData = { name, balance };
    const response = await dispatch(createPortfolioThunk(portfolioData));
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
        Set an initial balance for your portfolio.
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
        Create Portfolio
      </button>
    </form>
  );
}

export default CreatePortfolioModal;
