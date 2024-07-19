import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deletePortfolioThunk } from "../../../store/portfolio";
import s from "./DeletePortfolio.module.css";

function DeletePortfolioModal({ portfolioId, setSelectedPortfolio }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSelectedPortfolio(false);
    const response = await dispatch(deletePortfolioThunk(portfolioId));
    if (response.status === "success") {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.delete_portfolio_modal}>
      <span className={s.delete_portfolio_text}>
        Are you sure you want to delete this portfolio?
      </span>
      <div className={s.buttons}>
        <button className={s.back_button} onClick={closeModal}>
          Back
        </button>
        <button className={s.delete_button} type="submit">
          Yes
        </button>
      </div>
    </form>
  );
}

export default DeletePortfolioModal;
