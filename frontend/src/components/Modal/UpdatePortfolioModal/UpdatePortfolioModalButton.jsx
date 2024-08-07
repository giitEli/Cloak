import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import UpdatePortfolioModal from "./UpdatePortfolioModal";

function UpdatePortfolioModalButton({ currentPortfolio, className }) {
  const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = (e) => {
  //   e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
  //   setShowMenu(!showMenu);
  // };

  useEffect(() => {
    if (!showMenu) return;

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  return (
    <OpenModalMenuItem
      className={className}
      itemText={"Update Portfolio"}
      onItemClick={closeMenu}
      modalComponent={
        <UpdatePortfolioModal currentPortfolio={currentPortfolio} />
      }
    />
  );
}

export default UpdatePortfolioModalButton;
