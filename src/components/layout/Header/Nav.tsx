import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu-alt-right" id="menu-icon"></i>
        <i className="bx bx-menu-alt-left" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <NavLink className="mn-active" to="/">
          Strona Główna
        </NavLink>
        <NavLink to="/about-us">O Projekcie</NavLink>
        <div className="container__btn_log">
          <NavLink className="login__btn btn__login" to="/login">
            Zaloguj się
          </NavLink>
          <NavLink className="register__btn btn__signup" to="/sign-up">
            Zarejestruj się
          </NavLink>
        </div>
      </nav>
    </>
  );
};
