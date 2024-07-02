import { FormEvent } from "react";
import { Step, useSignup } from "../../contexts/signup.context";
import { Link, useNavigate } from "react-router-dom";
import { Method } from "../../types";
import { toast } from "react-toastify";
import { callApi } from "../../utils/api";

export const ConfirmForm = () => {
  const { signup, setSignup } = useSignup();

  const navigate = useNavigate();
  const handleBack = (e: FormEvent) => {
    e.preventDefault();

    setSignup((state) => ({
      ...state,
      step: Step.PlayerForm,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (signup.isConfirmTerms === false) {
      toast.error("Pole () nie zostało zaznaczone");

      return;
    }
    const response = await callApi<string>("user", Method.Post, {
      confirmPassword: signup.confirmPassword,
      email: signup.email,
      firstName: signup.firstName,
      lastName: signup.lastName,
      password: signup.password,
      playerTag: signup.playerTag,
    });

    if (!response.status) return toast.error(response.message);

    // Mozna to zastąpić toastify chodzi o /complete-signup a za to zmaienic sciezke na /login i wyzej uzyc toastify
    // Przenoszenie po rejestracji na potwierdzenie loginu
    if (response.status) return navigate("/complete-signup");
  };
  return (
    <>
      <div className="container__main_correct">
        <form onSubmit={handleSubmit}>
          <h2 className="signup__title">Signup Account</h2>
          <h3 className="title__confirm_heading">
            Before creating an account, please make sure you have provided the
            correct details.
          </h3>
          <h3 className="title__confirm_heading">
            Check "I agree all statements in"
            <br />
            <span>(Terms of our website)</span>
          </h3>
          <label className="signup__checkbox signup__checkbox_rs">
            <input
              type="checkbox"
              required
              checked={signup.isConfirmTerms}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  isConfirmTerms: e.target.checked,
                }))
              }
            />

            <div className="signup__text">
              <p>
                I agree all statements in
                <Link to="">Terms</Link> of
                <Link to="">Service</Link>.
              </p>
            </div>
          </label>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSubmit}>Create Account</button>
        </form>
      </div>
    </>
  );
};
