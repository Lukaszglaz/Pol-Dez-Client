import { FormEvent, useState } from "react";
import { Method } from "../../types";
import { callApi } from "../../utils/api";
import { toast } from "react-toastify";

import cocLoading from "/img/coc_loading_one.jpeg";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await callApi<string>(
      "auth/forgot-password",
      Method.Post,
      { email }
    );

    if (response.status)
      return toast.success(
        "If there is such a user, we have sent them an e-mail to their mailbox."
      );
    toast.error(response.message);
  };
  return (
    <div className="container__main_correct">
      <form onSubmit={handleSubmit} className="forgot__form">
        <h2 className="forgot__title">
          Don't worry, everyone forgets something sometimes.
        </h2>
        <p className="forgot__subtitle">
          Enter the email address assigned to your account. Instructions on how
          to instructions on how to reset your password will be sent to the
          email address you have provided e-mail.
        </p>
        <label className="forgot__label">
          Address E-mail
          <input
            className="forgot__input"
            type="email"
            placeholder="Address E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button className="forgot__button">Reset Password</button>
      </form>
      <div className="container__forgot_wc">
        <h2 className="forgot__title">Images from Clash Of Clans game</h2>

        <div className="image-coc">
          <img src={cocLoading} alt="Clash of Clans loading page." />
        </div>
      </div>
    </div>
  );
};
