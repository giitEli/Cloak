import { useState, useEffect } from "react";
import OpenModalMenuItem from "../OpenModalMenuItem";
import EditOrderModal from "./EditOrderModal";

function EditOrderModalButton({ stock, className }) {
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
      itemText="Change order"
      onItemClick={closeMenu}
      modalComponent={<EditOrderModal stock={stock} />}
    />
  );
}

export default EditOrderModalButton;
