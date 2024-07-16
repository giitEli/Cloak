import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountButton from "./AccountButton";
import LoginFormModal from "../Modal/LoginFormModal";
import SignupFormModal from "../Modal/SignupFormModal";
import { GiHoodedFigure } from "react-icons/gi";
import OpenModalMenuItem from "../Modal/OpenModalMenuItem";
import s from "./Navigation.module.css";

function Navigation({ isLoaded, setShowCart }) {
  const navigate = useNavigate();
  const ulRef = useRef();
  const sessionUser = useSelector((state) => state.session.user);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  useEffect(() => {
    if (!showAccountMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowAccountMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showAccountMenu]);

  return (
    <nav className={s.nav_bar}>
      <div
        className={s.home_icon}
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <GiHoodedFigure className={s.logo} />
        <span className={s.home_text}>Cloak</span>
      </div>
      <div className={s.nav_links}>
        {isLoaded && sessionUser && (
          <>
            <div
              className={s.nav_element}
              onClick={(e) => {
                e.preventDefault();
                navigate("/watchlist");
              }}
            >
              Watchlist
            </div>
            <div
              className={s.nav_element}
              onClick={(e) => {
                e.preventDefault();
                navigate("/portfolios");
              }}
            >
              Portfolios
            </div>
            <div
              className={s.nav_element}
              onClick={(e) => {
                e.preventDefault();
                setShowCart((prev) => !prev);
              }}
            >
              Cart
            </div>
            <AccountButton user={sessionUser} />
          </>
        )}
        {isLoaded && !sessionUser && (
          <>
            <div className={s.nav_element}>
              <OpenModalMenuItem
                itemText="Log In"
                modalComponent={<LoginFormModal />}
              />
            </div>
            <div className={s.nav_element}>
              <OpenModalMenuItem
                itemText="Sign Up"
                modalComponent={<SignupFormModal />}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
