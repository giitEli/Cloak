import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import SellStockModal from "./SellStockModal";

function SellStockModalButton({ className, portfolioId, stock }) {
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
      itemText="Sell Stock"
      onItemClick={closeMenu}
      modalComponent={
        <SellStockModal portfolioId={portfolioId} stock={stock} />
      }
    />
  );
}

export default SellStockModalButton;
