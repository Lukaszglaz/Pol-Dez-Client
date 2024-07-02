import { Link } from "react-router-dom";

export const CompleteSignUp = () => {
  return (
    <>
      <div className="signup-confirmation">
        <h2 className="signup-heading">Rejestracja zakończona sukcesem!</h2>
        <p className="signup-text">
          Witaj! Twoje konto zostało pomyślnie zarejestrowane w aplikacji:
        </p>
        <p className="signup-text">"Polska Dezerter - Clash of Clans".</p>
        <div className="signup-options">
          <Link to="/login" className="signup-button">
            Przejdź do logowania
          </Link>
          <Link to="/" className="signup-button">
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </>
  );
};
