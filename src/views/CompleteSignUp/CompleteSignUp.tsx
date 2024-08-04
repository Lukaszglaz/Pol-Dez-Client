import { Link } from "react-router-dom";

export const CompleteSignUp = () => {
  return (
    <>
      <div className="signup-confirmation">
        <h2 className="signup-heading">Registration successfully completed!</h2>
        <p className="signup-text">
          Hello, your account has been successfully registered in the
          application:
        </p>
        <p className="signup-text">"Polska Dezerter - Clash of Clans".</p>
        <div className="signup-options">
          <Link to="/login" className="signup-button">
            Go to login
          </Link>
          <Link to="/" className="signup-button">
            Go back to the homepage.
          </Link>
        </div>
      </div>
    </>
  );
};
