import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import s from "./Navigation.module.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate();

  return (
    <nav className={s.nav_bar}>
      <div
        className={s.home_icon}
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        Cloak
      </div>
      <div className={s.right}>
        {isLoaded && (
          <div className={s.profile_button_container}>
            <ProfileButton user={sessionUser} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
