import { Step, useSignup } from "../../contexts/signup.context";
import { ConfirmForm } from "./ConfirmForm";
import { GeneralForm } from "./GeneralForm";
import { PlayerForm } from "./PlayerForm";
import { StepMarker } from "./StepMarker";

export const SignUpContent = () => {
  const { signup } = useSignup();

  return (
    <>
      {signup.step === Step.GeneralForm && <GeneralForm />}
      {signup.step === Step.PlayerForm && <PlayerForm />}
      {signup.step === Step.ConfirmForm && <ConfirmForm />}

      <div className="container">
        <ul className="progressbar">
          <StepMarker step={Step.GeneralForm} />
          <StepMarker step={Step.PlayerForm} />
          <StepMarker step={Step.ConfirmForm} />
        </ul>
      </div>
    </>
  );
};
