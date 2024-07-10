import { FormEvent, useState } from "react";
import { callApi } from "../../utils/api";
import { LoginResponse } from "../../types/auth";
import { toast } from "react-toastify";
import { Method } from "../../types";
import { useNavigate, useParams } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { tokenId } = useParams();

  const [form, setForm] = useState({ confirmPassword: "", password: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await callApi<LoginResponse>(
      `auth/reset-password/${tokenId}`,
      Method.Patch,
      form
    );

    if (!response.status) return toast.error(response.message);

    toast.success("Hasło zostało pomyślnie zmienione");

    navigate("/login");
  };

  return (
    <div className="wrapper">
      <h2>
        Witamy na podstronie resetowania hasła! Cieszymy się, że możemy Ci
        pomóc.
      </h2>
      <p>
        Wpisz poniżej nowe hasło oraz je powtórz. Kliknij przycisk "Zresetuj
        hasło", by zmienić hasło na nowe.
      </p>
      <form onSubmit={handleSubmit}>
        <label className="login__label">
          Hasło
          <input
            className="login__input"
            type="password"
            placeholder="Hasło"
            required
            value={form.password}
            onChange={(e) =>
              setForm((state) => ({
                ...state,
                password: e.target.value,
              }))
            }
          />
        </label>
        <label className="login__label">
          Powtórz Hasło
          <input
            className="login__input"
            type="password"
            placeholder=" Powtórz"
            required
            value={form.confirmPassword}
            onChange={(e) =>
              setForm((state) => ({
                ...state,
                confirmPassword: e.target.value,
              }))
            }
          />
        </label>

        <button className="login__button">Zresetuj Hasło</button>
      </form>
    </div>
  );
};
