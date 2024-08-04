export const Footer = () => {
  return (
    <footer>
      <div className="container__box_one">
        <div className="contact-info">
          <h3>Contact information</h3>
          <p>
            Join the Clash of Clans community and manage your village like never
            before with Polska Dezerter.
          </p>
          <div className="contact-center">
            <div className="phone-contact">
              <div className="image-phone">
                <i className="bx bx-envelope"></i>
              </div>
              <div className="image-contact">
                <p>Address E-mail:</p>
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
          <h3>Our Application</h3>
          <ul>
            <li>
              <a href="/features">Functions</a>
            </li>
            <li>
              <a href="/support">Technical support</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="customer">
          <h3>For the User</h3>
          <ul>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Cookie policy s</a>
            </li>
            <li>
              <a href="">How to disable cookies</a>
            </li>
            <li>
              <a href="">Information obligation under RODO</a>
            </li>
            <li>
              <a href="">Cyber security</a>
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
