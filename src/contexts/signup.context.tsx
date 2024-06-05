import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SignupContextValue {
  signup: SignupState;
  setSignup: Dispatch<SetStateAction<SignupState>>;
}

export enum Step {
  GeneralForm,
  PlayerForm,
  ConfirmForm,
}

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isConfirmTerms: boolean;
  playerTag: string;
  step: Step;
}

const SignupContext = createContext<SignupContextValue>(null!);

export const useSignup = () => useContext(SignupContext);

interface Props {
  children: ReactNode;
}

export const SignupProvider = ({ children }: Props) => {
  const [signup, setSignup] = useState<SignupState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isConfirmTerms: false,
    playerTag: "",
    step: Step.GeneralForm,
  });

  return (
    <SignupContext.Provider
      value={{
        signup,
        setSignup,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
