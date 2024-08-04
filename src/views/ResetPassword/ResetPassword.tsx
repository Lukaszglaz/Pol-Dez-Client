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

    toast.success("Password successfully changed");

    navigate("/login");
  };

  return (
    <div className="wrapper">
      <h2>
        Welcome to the password reset subpage! We are happy to be able to help
        you help you.
      </h2>
      <p>
        Enter your new password below and repeat it. Click "Reset password "
        button to change your password to the new one.
      </p>
      <form onSubmit={handleSubmit}>
        <label className="login__label">
          Password
          <input
            className="login__input"
            type="password"
            placeholder="Password"
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
          Repeat Password
          <input
            className="login__input"
            type="password"
            placeholder=" Repeat Password"
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

        <button className="login__button">Reset Password</button>
      </form>
    </div>
  );
};
