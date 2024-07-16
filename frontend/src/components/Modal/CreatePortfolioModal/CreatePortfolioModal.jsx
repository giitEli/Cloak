import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { createPortfolioThunk } from "../../../store/portfolio";
import s from "./CreatePortfolio.module.css";

function CreatePortfolioModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isEmptySpaces = (string) => {
      if (string.length === 0) return true;
      for (const char of string) {
        if (char !== " ") return false;
      }
      return true;
    };

    const newErrors = {};
    if (isEmptySpaces(name)) {
      newErrors.name = "Portfolio name is required";
    }
    if (isEmptySpaces(balance)) {
      newErrors.balance = "Balance is required";
    }
    setErrors(newErrors);
  }, [name, balance]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!Object.keys(errors).length) {
      const portfolioData = { name, balance };
      const response = await dispatch(createPortfolioThunk(portfolioData));
      if (response.status === "success") {
        closeModal();
      }
    }
  };

  return (
    <form
      className={s.create_portfolio_modal_container}
      onSubmit={handleSubmit}
    >
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
      {isSubmitted && errors.name && <p className={s.error}>{errors.name}</p>}
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
      {isSubmitted && errors.balance && (
        <p className={s.error}>{errors.balance}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitted && Object.keys(errors).length}
      >
        Update Portfolio
      </button>
    </form>
  );
}

export default CreatePortfolioModal;
