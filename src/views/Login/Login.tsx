import { FormEvent, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Method } from "../../types";
import { toast } from "react-toastify";
import { useUser } from "../../contexts/user.context";
import { setLocalStorage } from "../../utils/localStorage";
import { LoginResponse } from "../../types/auth";
import { callApi } from "../../utils/api";
export const Login = () => {
  const { setUser } = useUser();

  const navigate = useNavigate();
  const [isVisible, isSetVisible] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await callApi<LoginResponse>("auth/login", Method.Post, {
      email: form.email,
      password: form.password,
    });

    if (!response.status) return toast.error(response.message);

    setUser(response.results.user);
    setLocalStorage("token", response.results.token);

    navigate("/panel");
  };

  return (
    <>
      <div className="container__main_correct">
        <form onSubmit={handleSubmit} className="login__form">
          <h2 className="login__title">Zaloguj się do serwisu</h2>
          <label className="login__label">
            Adres E-mail
            <input
              className="login__input"
              type="email"
              placeholder="Adres E-mail"
              required
              value={form.email}
              onChange={(e) =>
                setForm((state) => ({
                  ...state,
                  email: e.target.value,
                }))
              }
            />
          </label>

          <label className="login__label">
            Hasło
            <input
              placeholder=" Hasło"
              className="login__input"
              required
              type={isVisible ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm((state) => ({
                  ...state,
                  password: e.target.value,
                }))
              }
            />
            {isVisible ? (
              <IoEyeOff
                className="login__icon"
                onClick={() => isSetVisible(false)}
              />
            ) : (
              <IoEye onClick={() => isSetVisible(true)} />
            )}
          </label>
          <Link to="/forgot-password">Nie pamiętam hasła</Link>

          <button type="submit" className="login__button">
            Zaloguj się
          </button>
        </form>
        <div className="container__login_wc">
          <h2 className="login__title">Zdjęcia z gry Clash Of Clans</h2>

          <div className="image-coc">
            <img
              src="../public/img/coc_loading_one.jpeg"
              alt="Clash of Clans loading page."
            />
          </div>
        </div>
      </div>
    </>
  );
};
