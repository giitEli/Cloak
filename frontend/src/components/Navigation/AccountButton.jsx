import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "../Modal/OpenModalMenuItem";
import LoginFormModal from "../Modal/LoginFormModal";
import SignupFormModal from "../Modal/SignupFormModal";
import { useNavigate } from "react-router-dom";

import s from "./Navigation.module.css";

function AccountButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    navigate("/");
  };

  return (
    <>
      <div onClick={toggleMenu} className={s.nav_element}>
        Account
      </div>
      {showMenu && (
        <div className={s.drop_down_menu} ref={ulRef}>
          {user ? (
            <>
              <div className={s.dropdown_name}>
                {user.firstName} {user.lastName}
              </div>
              <div
                className={s.dropdown_profile_button}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/profile");
                  closeMenu();
                }}
              >
                Profile
              </div>
              <div className={s.dropdown_logout_button}>
                <button onClick={logout}>Log Out</button>
              </div>
            </>
          ) : (
            <>
              <div className={s.drop_down_top}>
                <OpenModalMenuItem
                  itemText="Log In"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
              </div>
              <div className={s.drop_down_bottom}>
                <OpenModalMenuItem
                  itemText="Sign Up"
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AccountButton;
