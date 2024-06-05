import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main className="home">
        <section className="container__welcome_bx">
          <h1>Aplikacja Polska Dezerter - Clash of Clans</h1>
          <p>
            Aplikacja Polska Dezerter - Clash of Clans to narzędzie stworzone
            specjalnie dla klanu Polska Dezerter w grze Clash of Clans.
          </p>
          <p>
            Zapewnia ona przejrzysty interfejs użytkownika oraz dostęp do
            kluczowych funkcji potrzebnych do zarządzania klanem oraz śledzenia
            postępów graczy.
          </p>
          <div className="button-container">
            <div className="block-pl">
              <i className="bx bxs-chevrons-right"></i>

              <Link to="#">Napisz do nas!</Link>
            </div>
            {/* <div className="block-pl">
              <a href="#">Zobacz moją ofertę</a>
            </div> */}
          </div>
          <div className="container__last_bx">
            <div className="container__main_block">
              <h2>Główne funkcje aplikacji:</h2>
              <ul>
                <li>Panel logowania i rejestracji dla użytkowników</li>
                <li>Przeglądanie listy graczy dodanych przez administratora</li>
                <li>Wyświetlanie statystyk graczy oraz klanu</li>
                <li>Zarządzanie klanem przez administratora</li>
                <li>
                  Bezpieczne mechanizmy uwierzytelniania i przechowywania danych
                </li>
              </ul>
            </div>
            <div className="container__aside_block">
              <h2>W trakcie Budowy</h2>
            </div>
          </div>
          <h3>
            Zapraszamy do korzystania z aplikacji <br />
            <span>Polska Dezerter - Clash of Clans</span>i dołączania do naszego
            klanu w walce o dominację w świecie Clash of Clans!
          </h3>
        </section>
      </main>
    </>
  );
};
