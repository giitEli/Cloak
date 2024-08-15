import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import OrderModal from "./OrderModal";

function OrderModalButton({ stock, className, type, currentAmount }) {
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
      itemText={type === "purchase" ? "Purchase" : "Change Order"}
      onItemClick={closeMenu}
      modalComponent={
        <OrderModal stock={stock} type={type} currentAmount={currentAmount} />
      }
    />
  );
}

export default OrderModalButton;
