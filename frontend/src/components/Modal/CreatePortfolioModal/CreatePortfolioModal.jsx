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
    if (name.length > 20) {
      newErrors.name = "Name but me 20 characters or less";
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
      <label className={s.label}>Enter a name for your new portfolio</label>
      <input
        className={s.input}
        type="text"
        value={name}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
      {isSubmitted && errors.name && <p className={s.error}>{errors.name}</p>}
      <label className={s.label}>Set a balance for your portfolio</label>
      <div className={s.balance_input_section}>
        <span className={s.dollar_sign}>$</span>
        <input
          className={s.input}
          type="text"
          defaultValue={0}
          value={balance}
          onChange={(e) => {
            e.preventDefault();
            const value = Number(e.target.value);
            if (!isNaN(value) && value >= 0) {
              setBalance(e.target.value);
            }
          }}
        />
      </div>
      {isSubmitted && errors.balance && (
        <p className={s.error}>{errors.balance}</p>
      )}
      <button
        className={s.button}
        type="submit"
        disabled={isSubmitted && Object.keys(errors).length}
      >
        Create portfolio
      </button>
    </form>
  );
}

export default CreatePortfolioModal;
