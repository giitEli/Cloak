import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import DepositModal from "./DepositModal";

function DepositModalButton({ currentPortfolio, className }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  return (
    <OpenModalMenuItem
      className={className}
      itemText="Deposit"
      onItemClick={closeMenu}
      modalComponent={<DepositModal currentPortfolio={currentPortfolio} />}
    />
  );
}

export default DepositModalButton;
