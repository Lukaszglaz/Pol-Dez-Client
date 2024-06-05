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
          <h2 className="signup__title">Zarejestruj konto</h2>
          <label className="signup__label">
            Imię
            <input
              className="signup__input"
              type="text"
              placeholder="Imię"
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
            Nazwisko
            <input
              className="signup__input"
              type="text"
              placeholder="Nazwisko"
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
            Adres E-mail
            <input
              className="signup__input"
              type="email"
              placeholder="Adres E-mail"
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
            Hasło
            <input
              placeholder="Hasło"
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
            Potwierdź hasło
            <input
              placeholder="Potwierdź hasło"
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

          <button>Przejdź dalej</button>
        </form>
      </div>
    </>
  );
};
