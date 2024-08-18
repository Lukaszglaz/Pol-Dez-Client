import { FormEvent, useState } from "react";
import { Step, useSignup } from "../../contexts/signup.context";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const GeneralForm = () => {
  const { signup, setSignup } = useSignup();

  const [isVisible, isSetVisible] = useState(false);
  const [isConfirmVisible, isSetConfirmVisible] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSignup((state) => ({
      ...state,
      step: Step.PlayerForm,
    }));
  };

  return (
    <>
      <div className="container__main_correct">
        <form onSubmit={handleSubmit}>
          <h2 className="signup__title">Sign up for an account</h2>
          <label className="signup__label">
            First Name
            <input
              className="signup__input"
              type="text"
              placeholder="Name"
              required
              value={signup.firstName}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  firstName: e.target.value,
                }))
              }
            />
          </label>
          <label className="signup__label">
            Last Name
            <input
              className="signup__input"
              type="text"
              placeholder="Last Name"
              required
              value={signup.lastName}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  lastName: e.target.value,
                }))
              }
            />
          </label>
          <label className="signup__label">
            Address E-mail
            <input
              className="signup__input"
              type="email"
              placeholder="Address E-mail"
              required
              value={signup.email}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label className="signup__label">
            Password
            <input
              placeholder="Password"
              className="signup__input"
              required
              type={isVisible ? "text" : "password"}
              value={signup.password}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  password: e.target.value,
                }))
              }
            />
            {isVisible ? (
              <IoEyeOff
                className="signup__icon"
                onClick={() => isSetVisible(false)}
              />
            ) : (
              <IoEye onClick={() => isSetVisible(true)} />
            )}
          </label>
          <label className="signup__label">
            Confirm your password
            <input
              placeholder="Confirm your password"
              className="signup__input"
              required
              type={isConfirmVisible ? "text" : "password"}
              value={signup.confirmPassword}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  confirmPassword: e.target.value,
                }))
              }
            />
            {isConfirmVisible ? (
              <IoEyeOff
                className="signup__icon"
                onClick={() => isSetConfirmVisible(false)}
              />
            ) : (
              <IoEye onClick={() => isSetConfirmVisible(true)} />
            )}
          </label>

          <button>Continue</button>
        </form>
      </div>
    </>
  );
};
