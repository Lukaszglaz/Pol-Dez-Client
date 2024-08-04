export const AboutUs = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
        <p>
          Meet the team behind Polska Dezerter - <span>Clash of Clans</span>
        </p>

        <div className="content">
          <div className="section">
            <h2>Who are we?</h2>
            <p>
              Poland Deserter is a <span>Clash of Clans</span> community that.
              brings together players from all over Poland. Our application has
              been created with for fans of this popular strategy game to enable
              them to better manage their villages, clans and strategies.
            </p>
          </div>

          <div className="section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide players with <span>Clash of Clans</span>{" "}
              the best tools to manage their clans and villages. We want every
              player to be able to get maximum enjoyment from the game, while
              having access to advanced features that make planning and strategy
              easier.
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
            <h2>Our Values</h2>
            <p>
              <span>Passion:</span>We love <span>Clash of Clans</span> and want
              to share our passion with others.
            </p>
            <p>
              <span>Innovation:</span> We are constantly working on new
              features, to provide players with the best tools.
            </p>
            <p>
              <span>Community:</span>We believe that the best achievements come
              by working together and supporting each other.
            </p>
          </div>

          <div className="section">
            <h2>Contact</h2>
            <p>
              If you have questions or need support, do not hesitate to Contact:
            </p>
            <p>
              Address E-mail:{" "}
              <a href="mailto:kontakt@glazlukasz.pl">kontakt@glazlukasz.pl</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
