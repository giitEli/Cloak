import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import DeletePortfolioModal from "./DeletePortfolioModal";

function DeletePortfolioModalButton({ portfolioId, setSelectedPortfolio }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  return (
    <button onClick={toggleMenu}>
      <OpenModalMenuItem
        itemText="Delete Portfolio"
        onItemClick={closeMenu}
        modalComponent={
          <DeletePortfolioModal
            portfolioId={portfolioId}
            setSelectedPortfolio={setSelectedPortfolio}
          />
        }
      />
    </button>
  );
}

export default DeletePortfolioModalButton;
