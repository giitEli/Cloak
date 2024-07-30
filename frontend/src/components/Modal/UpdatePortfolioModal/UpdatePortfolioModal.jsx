import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { updatePortfolioThunk } from "../../../store/portfolio";
import PulseLoader from "react-spinners/PulseLoader";
import s from "./UpdatePortfolio.module.css";

function UpdatePortfolioModal({ currentPortfolio }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [name, setName] = useState(currentPortfolio.name);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState();

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
      newErrors.name = "Name must be 20 characters or less";
    }
    setErrors(newErrors);
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(true);
    if (!Object.keys(errors).length) {
      const response = await dispatch(
        updatePortfolioThunk(currentPortfolio.id, { name })
      );
      if (response.status === "success") {
        closeModal();
      }
    }
    setIsLoading(false);
  };

  return (
    <form
      className={s.create_portfolio_modal_container}
      onSubmit={handleSubmit}
    >
      <label className={s.label}>Enter a name for your portfolio</label>
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
      <button
        className={s.button}
        type="submit"
        disabled={isSubmitted && Object.keys(errors).length}
      >
        {isLoading ? (
          <PulseLoader color="grey" size="10px" />
        ) : (
          "Update portfolio"
        )}
      </button>
    </form>
  );
}

export default UpdatePortfolioModal;
