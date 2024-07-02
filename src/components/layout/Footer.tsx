export const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="container__correct_ft">
    //     <div className="contanier__contact_cc">
    //       <h4>Informacje Kontaktowe</h4>
    //       <p>
    //         Adres e-mail:{" "}
    //         <a href="mailto:kontakt@glazlukasz.pl">kontakt@glazlukasz.pl</a>
    //       </p>
    //     </div>
    //     <div className="contanier__contact_cc">
    //       <h4>Dla Użytkownika</h4>
    //       <ul>
    //         <li>
    //           <Link to="/privacy-files-cookies">Polityka plików cookie</Link>
    //         </li>
    //         <li>
    //           <Link to="/privacy-policy">Polityka prywatności</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="contanier__contact_cc">
    //     <p>Copyright © 2024 - All Rights Reserved. By glazlukasz.pl</p>
    //   </div>
    // </footer>
    <footer>
      <div className="container__box_one">
        <div className="contact-info">
          <h3>Informacje Kontaktowe</h3>
          <p>
            Dołącz do społeczności Clash of Clans i zarządzaj swoją wioską jak
            nigdy dotąd z Polska Dezerter.
          </p>
          <div className="contact-center">
            <div className="phone-contact">
              <div className="image-phone">
                <i className="bx bx-envelope"></i>
              </div>
              <div className="image-contact">
                <p>Adres e-mail:</p>
                <p>
                  <a href="mailto:kontakt@glazlukasz.pl">
                    kontakt@glazlukasz.pl
                  </a>
                </p>
              </div>
            </div>
          </div>
          <h2></h2>
        </div>
        <div className="offer">
          <h3>Nasza Aplikacja</h3>
          <ul>
            <li>
              <a href="/features">Funkcje</a>
            </li>
            <li>
              <a href="/pricing">Cennik</a>
            </li>
            <li>
              <a href="/support">Wsparcie Techniczne</a>
            </li>
            <li>
              <a href="/about">O Nas</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="customer">
          <h3>Dla Użytkownika</h3>
          <ul>
            <li>
              <a href="">Regulamin serwisu</a>
            </li>
            <li>
              <a href="">Polityka prywatności</a>
            </li>
            <li>
              <a href="">Polityka cookies</a>
            </li>
            <li>
              <a href="">Jak wyłączyć pliki cookie</a>
            </li>
            <li>
              <a href="">Obowiązek informacyjny RODO</a>
            </li>
            <li>
              <a href="">Cyberbezpieczeństwo</a>
            </li>
          </ul>
          <div className="social__container">
            <h3>Social Media</h3>
            <div className="social__box">
              <a href="https://www.instagram.com/lucasxcodes">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@lucasxcodes">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@lucasxcodes">
                <i className="bx bxl-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2024 - All Rights Reserved. By glazlukasz.pl |
          coc.glazlukasz.pl
        </p>
      </div>
    </footer>
  );
};
