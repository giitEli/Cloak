import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountButton from "./AccountButton";
import LoginFormModal from "../Modal/LoginFormModal";
import SignupFormModal from "../Modal/SignupFormModal";
import { GiHoodedFigure } from "react-icons/gi";
import OpenModalMenuItem from "../Modal/OpenModalMenuItem";
import s from "./Navigation.module.css";
import { useCartDisplayContext } from "../../context/Cart";

function Navigation({ isLoaded }) {
  const navigate = useNavigate();
  const ulRef = useRef();
  const sessionUser = useSelector((state) => state.session.user);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const { setCartDisplay } = useCartDisplayContext();

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
        <a
          className={`${s.nav_element} ${s.about_link}`}
          href="https://www.linkedin.com/in/eli-suffridge-04254b220/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={`${s.nav_element} ${s.about_link}`}
          href="https://github.com/giitEli/Cloak"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
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
                setCartDisplay((prev) => !prev);
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
