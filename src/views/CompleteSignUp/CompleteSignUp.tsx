import { Link } from "react-router-dom";

export const CompleteSignUp = () => {
  return (
    <>
      <div>
        <p>Brawo zarejestrowałeś się poprawnie</p>
        linkTo
        <Link to="/login">Przejdź do zalogowania się</Link>
      </div>
    </>
  );
};
