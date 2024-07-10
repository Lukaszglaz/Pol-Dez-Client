export const AboutUs = () => {
  return (
    <>
      <div className="container">
        <h1>O Nas</h1>
        <p>
          Poznaj zespół stojący za Polska Dezerter - <span>Clash of Clans</span>
        </p>

        <div className="content">
          <div className="section">
            <h2>Kim Jesteśmy?</h2>
            <p>
              Polska Dezerter to społeczność <span>Clash of Clans</span>, która
              skupia graczy z całej Polski. Nasza aplikacja została stworzona z
              myślą o fanach tej popularnej gry strategicznej, aby umożliwić im
              lepsze zarządzanie swoimi wioskami, klanami i strategiami.
            </p>
          </div>

          <div className="section">
            <h2>Nasza Misja</h2>
            <p>
              Naszą misją jest dostarczenie graczom <span>Clash of Clans</span>{" "}
              najlepszych narzędzi do zarządzania ich klanami oraz wioskami.
              Chcemy, aby każdy gracz mógł czerpać maksimum przyjemności z gry,
              jednocześnie mając dostęp do zaawansowanych funkcji, które
              ułatwiają planowanie i strategię.
            </p>
          </div>

          {/* <div className="section">
            <h2>Nasz Zespół</h2>
            <div className="team">
              <div className="team-member">
                <h3>-0-0-0-0-</h3>
                <p>-0-0-0-0-</p>
              </div>
              <div className="team-member">
                <h3>-0-0-0-0-</h3>
                <p>-0-0-0-0-</p>
              </div>
              <div className="team-member">
                <h3>-0-0-0-0-</h3>
                <p>-0-0-0-0-</p>
              </div>
            </div>
          </div> */}

          <div className="section">
            <h2>Nasze Wartości</h2>
            <p>
              <span>Pasja:</span> Kochamy <span>Clash of Clans</span> i chcemy
              dzielić się naszą pasją z innymi.
            </p>
            <p>
              <span>Innowacja:</span> Ciągle pracujemy nad nowymi funkcjami, aby
              zapewnić graczom najlepsze narzędzia.
            </p>
            <p>
              <span>Wspólnota:</span> Wierzymy, że najlepsze osiągnięcia
              przychodzą poprzez współpracę i wspieranie się nawzajem.
            </p>
          </div>

          <div className="section">
            <h2>Kontakt</h2>
            <p>
              Jeśli masz pytania lub potrzebujesz wsparcia, nie wahaj się z nami
              skontaktować:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:kontakt@glazlukasz.pl">kontakt@glazlukasz.pl</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
