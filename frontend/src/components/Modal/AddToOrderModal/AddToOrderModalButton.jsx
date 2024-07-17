import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import AddToOrderModal from "./AddToOrderModal";

function AddToOrderModalButton({ stock, className }) {
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
      itemText="Purchase"
      onItemClick={closeMenu}
      modalComponent={<AddToOrderModal stock={stock} />}
    />
  );
}

export default AddToOrderModalButton;
