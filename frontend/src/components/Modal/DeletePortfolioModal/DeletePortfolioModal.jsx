import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <form onSubmit={handleSubmit}>
      Are you sure you want to delete this portfolio?
      <button onClick={closeModal}>Back</button>
      <button type="submit">Yes</button>
    </form>
  );
}

export default DeletePortfolioModal;
