import { FormEvent, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Method } from "../../types";
import { toast } from "react-toastify";

import { useUser } from "../../contexts/user.context";
import { setLocalStorage } from "../../utils/localStorage";
import { LoginResponse } from "../../types/auth";
import { callApi } from "../../utils/api";

import cocLoading from "/img/coc_loading_one.jpeg";
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

    toast.success("Login was successful.");

    setUser(response.results.user);
    setLocalStorage("token", response.results.token);

    navigate("/panel");
  };

  return (
    <>
      <div className="container__main_correct">
        <form onSubmit={handleSubmit} className="login__form">
          <h2 className="login__title">Log in to the service</h2>
          <label className="login__label">
            Address E-mail
            <input
              className="login__input"
              type="email"
              placeholder="Address E-mail"
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
            Password
            <input
              placeholder=" Password"
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
          <Link to="/forgot-password">I can't remember my password.</Link>

          <button type="submit" className="login__button">
            Log in
          </button>
        </form>
        <div className="container__login_wc">
          <h2 className="login__title">Images from Clash Of Clans game</h2>

          <div className="image-coc">
            <img src={cocLoading} alt="Clash of Clans loading page." />
          </div>
        </div>
      </div>
    </>
  );
};
