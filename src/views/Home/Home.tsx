import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main className="home">
        <section className="container__welcome_bx">
          <h1>App Polska Dezerter - Clash of Clans</h1>
          <p>
            The Polska Dezerter - Clash of Clans application is a tool created
            specifically for the Poland Deserter clan in the game Clash of
            Clans.
          </p>
          <p>
            It provides a clear user interface and access to the key functions
            needed to manage your clan and track the progress of your progress
            of players.
          </p>
          <div className="button-container">
            <div className="block-pl">
              <i className="bx bxs-chevrons-right"></i>

              <Link to="#">Write to us!</Link>
            </div>
            {/* <div className="block-pl">
              <a href="#">Zobacz moją ofertę</a>
            </div> */}
          </div>
          <div className="container__last_bx">
            <div className="container__main_block">
              <h2>Main features of the application:</h2>
              <ul>
                <li>Login and registration panel for users</li>
                <li>Viewing the list of players added by the administrator</li>
                <li>Display of player and clan statistics</li>
                <li>Clan management by the administrator</li>
                <li>Secure authentication and data storage mechanisms</li>
              </ul>
            </div>
            <div className="container__aside_block">
              <h2>W trakcie Budowy</h2>
            </div>
          </div>
          <h3>
            You are welcome to use the application <br />
            <span>Polska Dezerter - Clash of Clans</span> and join our clan in
            the battle for supremacy in the world of Clash of Clans!
          </h3>
        </section>
      </main>
    </>
  );
};
