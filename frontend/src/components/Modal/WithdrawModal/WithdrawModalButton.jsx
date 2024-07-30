import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import WithdrawModal from "./WithdrawModal";

function WithdrawModalButton({ currentPortfolio, className }) {
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
      itemText="Withdraw"
      onItemClick={closeMenu}
      modalComponent={<WithdrawModal currentPortfolio={currentPortfolio} />}
    />
  );
}

export default WithdrawModalButton;
