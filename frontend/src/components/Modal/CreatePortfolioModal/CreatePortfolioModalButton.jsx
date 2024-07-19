import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import CreatePortfolioModal from "./CreatePortfolioModal";

function CreatePortfolioModalButton({ className }) {
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
    <OpenModalMenuItem
      className={className}
      itemText="Create Portfolio"
      onItemClick={closeMenu}
      modalComponent={<CreatePortfolioModal />}
    />
  );
}

export default CreatePortfolioModalButton;
