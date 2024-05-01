import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contanier__contact_cc">
          <h4>Informacje Kontaktowe</h4>
          <p>
            Adres e-mail:{" "}
            <a href="mailto:kontakt@glazlukasz.pl">kontakt@glazlukasz.pl</a>
          </p>
        </div>
        <div className="contanier__contact_cc">
          <h4>Dla Klienta</h4>
          <ul>
            <li>
              <Link to="/privacy-files-cookies">Polityka plików cookie</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Polityka prywatności</Link>
            </li>
          </ul>
        </div>

        <div className="contanier__contact_cc">
          <p>Copyright © 2024 - All Rights Reserved. By glazlukasz.pl</p>
        </div>
      </footer>
    </>
  );
};
