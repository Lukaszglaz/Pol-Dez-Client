import { SignupProvider } from "../../contexts/signup.context";
import { SignUpContent } from "./SignUpContent";

export const SignUp = () => {
  return (
    <SignupProvider>
      <SignUpContent />
    </SignupProvider>
  );
};
