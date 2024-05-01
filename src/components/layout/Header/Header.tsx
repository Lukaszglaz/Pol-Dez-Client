import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>
            <NavLink to="/">PL-Dezerter</NavLink>
          </h2>
        </div>

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
            <button className="login__btn">Zaloguj się</button>
            <button className="register__btn">Zarejestruj się</button>
          </div>
        </nav>
      </header>
    </>
  );
};