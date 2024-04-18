import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.navLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.navLink}>
        Log in
      </NavLink>
    </div>
  );
};
export default AuthNav;
