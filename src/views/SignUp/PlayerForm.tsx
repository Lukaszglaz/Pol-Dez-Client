import { FormEvent } from "react";
import { Step, useSignup } from "../../contexts/signup.context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PlayerForm = () => {
  const { signup, setSignup } = useSignup();

  const handleBack = (e: FormEvent) => {
    e.preventDefault();

    setSignup((state) => ({
      ...state,
      step: Step.GeneralForm,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const test = /#([A-Z0-9]{0,10})$/.test(signup.playerTag);

    if (!test) {
      toast.error("Incorrect Player Tag! ");
      return;
    }

    setSignup((state) => ({
      ...state,
      step: Step.ConfirmForm,
    }));
  };

  return (
    <>
      <div className="container__main_correct">
        <form onSubmit={handleSubmit}>
          <h2 className="signup__title">Zarejestruj konto</h2>

          <label className="signup__label label__player_tag">
            Player Tag
            <input
              className="signup__input"
              type="text"
              placeholder="Player Tag"
              required
              value={signup.playerTag}
              onChange={(e) =>
                setSignup((state) => ({
                  ...state,
                  playerTag: e.target.value,
                }))
              }
            />
            <p>
              Np:
              <span>#JY892SHQ4</span>
            </p>
          </label>
          <button type="button" onClick={handleBack}>
            Cofnij
          </button>
          <button>Przejdź dalej</button>
        </form>
      </div>
    </>
  );
};
