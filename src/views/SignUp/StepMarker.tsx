import { Step, useSignup } from "../../contexts/signup.context";

interface Props {
  step: Step;
}

export const StepMarker = ({ step }: Props) => {
  const { signup } = useSignup();

  // const handleClick = () => {
  //   setSignup((state) => ({
  //     ...state,
  //     step,
  //   }));
  // };

  return (
    <li
      // onClick={handleClick}
      className={signup.step === step ? "active" : ""}
    ></li>
  );
};
