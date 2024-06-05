export const ForgotPassword = () => {
  return (
    <>
      <div className="container__main_correct">
        <form className="forgot__form">
          <h2 className="forgot__title">
            Nie przejmuj się, każdy czasem o czymś zapomina.
          </h2>
          <p className="forgot__subtitle">
            Podaj adres e-mail przypisany do Twojego konta. Instrukcje dotyczące
            zresetowania hasła zostaną wysłane na wskazany przez ciebie adres
            e-mail.
          </p>
          <label className="forgot__label">
            Adres E-mail
            <input
              className="forgot__input"
              type="email"
              placeholder="Adres E-mail"
              required
            />
          </label>

          <button className="forgot__button">Resetuj Hasło</button>
        </form>
        <div className="container__forgot_wc">
          <h2 className="forgot__title">Zdjęcia z gry Clash Of Clans</h2>

          <div className="image-coc">
            <img
              src="../public/img/coc_loading_one.jpeg"
              alt="Clash of Clans loading page."
            />
          </div>
        </div>
      </div>
    </>
  );
};
