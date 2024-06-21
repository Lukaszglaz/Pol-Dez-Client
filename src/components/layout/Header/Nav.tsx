import { NavLink } from "react-router-dom";
import { useUser } from "../../../contexts/user.context";
import { toast } from "react-toastify";
import { callApi } from "../../../utils/api";
import { deleteLocalStorage } from "../../../utils/localStorage";

export const Nav = () => {
  const { user, setUser } = useUser();
  const handleLogout = async () => {
    const response = await callApi("auth/logout");

    if (!response.status) return toast.error(response.message);
    setUser(null);
    deleteLocalStorage("token");
  };
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
          {!user ? (
            <NavLink className="login__btn btn__login" to="/login">
              Zaloguj się
            </NavLink>
          ) : null}
          {!user ? (
            <NavLink className="register__btn btn__signup" to="/sign-up">
              Zarejestruj się
            </NavLink>
          ) : null}
          {user ? (
            <NavLink className="register__btn btn__signup" to="/panel">
              Panel
            </NavLink>
          ) : null}
          {user ? <button onClick={handleLogout}>Wyloguj</button> : null}
        </div>
      </nav>
    </>
  );
};
