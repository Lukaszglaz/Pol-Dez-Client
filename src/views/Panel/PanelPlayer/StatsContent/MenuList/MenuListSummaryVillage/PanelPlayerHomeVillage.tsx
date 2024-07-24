import { usePanelInfo } from "../../../../../../contexts/panel.context";

export const PanelPlayerHomeVillage = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { heroes, troops, spells } = player;

  const homeHeroes = heroes.filter((hero) => hero.village === "home");

  const totalLevelHeroes = homeHeroes.reduce(
    (sum, hero) => sum + hero.level,
    0
  );
  const totalMaxLevelHeroes = homeHeroes.reduce(
    (sum, hero) => sum + hero.hallMaxLevel,
    0
  );

  const progressPercentageHeroes =
    (totalLevelHeroes / totalMaxLevelHeroes) * 100;

  // TROOPS STEP

  const homeTroops = troops.filter((troops) => troops.village === "home");

  const totalLevelTroops = homeTroops.reduce(
    (sum, troops) => sum + troops.level,
    0
  );

  const totalMaxLevelTroops = homeTroops.reduce(
    (sum, troops) => sum + troops.hallMaxLevel,
    0
  );

  const progressPercentageTroops =
    (totalLevelTroops / totalMaxLevelTroops) * 100;

  // SPELLS STEP

  const homeSpells = spells.filter((spells) => spells.village === "home");

  const totalLevelSpells = homeSpells.reduce(
    (sum, spells) => sum + spells.level,
    0
  );
  const totalMaxLevelSpells = homeSpells.reduce(
    (sum, spells) => sum + spells.hallMaxLevel,
    0
  );

  const progressPercentageSpells =
    (totalLevelSpells / totalMaxLevelSpells) * 100;

  // Step Other Level Heroes

  const heroLeft = heroes.at(0)
    ? (heroes.at(0)?.hallMaxLevel ?? 0) - (heroes.at(0)?.level ?? 0)
    : 0;
  const archerLeft = heroes.at(1)
    ? (heroes.at(1)?.hallMaxLevel ?? 0) - (heroes.at(1)?.level ?? 0)
    : 0;
  const wardenLeft = heroes.at(2)
    ? (heroes.at(2)?.hallMaxLevel ?? 0) - (heroes.at(2)?.level ?? 0)
    : 0;
  const championLeft = heroes.at(4)
    ? (heroes.at(4)?.hallMaxLevel ?? 0) - (heroes.at(4)?.level ?? 0)
    : 0;

  return (
    <div className="profile-content__summary-home">
      <h2 className="profile-content__summary-main">Home Village</h2>
      <div className="profile-content__summary-container">
        <div className="profile-content__summary-home__heroes">
          <div className="profile-content__summary-home__image">
            <img
              className="profile-content__summary-home__image"
              src="/public/img/summary/armyth/hero-0.png"
              alt="Hero Image"
            />
          </div>
          <div className="profile-content__summary-containerArmy">
            <div className="profile-content__summary-containerArmy__text">
              <h2>Heroes</h2>
              <p>Level Min to Max</p>
            </div>
            <div className="profile-content__summary-containerArmy__progressbar">
              <div
                className="profile-content__summary-containerArmy__progressbar-progress"
                style={{ width: `${progressPercentageHeroes}%` }}
              >
                <span className="profile-content__summary-main__lvl">
                  {totalLevelHeroes}
                </span>
                /
                <span className="profile-content__summary-main__lvl">
                  {totalMaxLevelHeroes}
                </span>
              </div>
            </div>
            <h3>Hero levels left:</h3>
            <div className="profile-content__summary-containerArmy__levelLeft">
              <div className="levelLeft__container">
                <img
                  src="/img/Summary/ArmyTh/LevelLeft/hero-0.png"
                  alt="Archer image"
                  className="levelLeft__container-image"
                />
                <div className="levelLeft__container-statLeft">
                  + {heroLeft}
                </div>
              </div>
              <div className="levelLeft__container">
                <img
                  src="/img/Summary/ArmyTh/LevelLeft/hero-1.webp"
                  alt="Hero"
                  className="levelLeft__container-image"
                />
                <div className="levelLeft__container-statLeft">
                  + {archerLeft}
                </div>
              </div>
              <div className="levelLeft__container">
                <img
                  src="/img/Summary/ArmyTh/LevelLeft/hero-2.png"
                  alt="Warden image"
                  className="levelLeft__container-image"
                />
                <div className="levelLeft__container-statLeft">
                  + {wardenLeft}
                </div>
              </div>
              <div className="levelLeft__container">
                <img
                  src="/img/Summary/ArmyTh/LevelLeft/hero-3.webp"
                  alt="Champion image"
                  className="levelLeft__container-image"
                />
                <div className="levelLeft__container-statLeft">
                  + {championLeft}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-content__summary-home__heroes">
          <div className="profile-content__summary-home__image">
            <img
              className="profile-content__summary-home__image"
              src="/public/img/summary/armyth/troop-0.webp"
              alt="Troops image"
            />
          </div>

          <div className="profile-content__summary-containerArmy">
            <div className="profile-content__summary-containerArmy__text">
              <h2>Troops</h2>
              <p>Level Min to Max</p>
            </div>
            <div className="profile-content__summary-containerArmy__progressbar">
              <div
                className="profile-content__summary-containerArmy__progressbar-progress"
                style={{ width: `${progressPercentageTroops}%` }}
              >
                <span className="profile-content__summary-main__lvl">
                  {totalLevelTroops}
                </span>
                /
                <span className="profile-content__summary-main__lvl">
                  {totalMaxLevelTroops}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-content__summary-home__heroes">
          <div className="profile-content__summary-home__image">
            <img
              className="profile-content__summary-home__image"
              src="/public/img/summary/armyth/spell-0.png"
              alt="Spells image"
            />
          </div>

          <div className="profile-content__summary-containerArmy">
            <div className="profile-content__summary-containerArmy__text">
              <h2>Spells</h2>
              <p>Level Min to Max</p>
            </div>
            <div className="profile-content__summary-containerArmy__progressbar">
              <div
                className="profile-content__summary-containerArmy__progressbar-progress"
                style={{ width: `${progressPercentageSpells}%` }}
              >
                <span className="profile-content__summary-main__lvl">
                  {totalLevelSpells}
                </span>
                /
                <span className="profile-content__summary-main__lvl">
                  {totalMaxLevelSpells}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-content__summary-home__levels"></div>
      </div>
    </div>
  );
};
