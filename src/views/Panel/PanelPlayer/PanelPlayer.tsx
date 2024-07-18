/* eslint-disable react-hooks/rules-of-hooks */
// import { useEffect } from "react";
// import { callApi } from "../../../utils/api";
// import { Method, PlayerResponse } from "../../../types";
import Slider, { Settings } from "react-slick";
import { usePanelInfo } from "../../../contexts/panel.context";
import { useState } from "react";

export const PanelPlayer = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const {
    name,
    townHallLevel,
    townHallWeaponLevel,
    builderHallLevel,
    clan,
    role,
    expLevel,
    warStars,
    trophies,
    builderBaseTrophies,
    donations,
    received,
    attackWins,
    defenseWins,
    bestTrophies,
    bestBuilderBaseTrophies,
    tag,
    heroes,
    troops,
    spells,
  } = player;

  const settings: Settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const [activeTab, setActiveTab] = useState("Summary");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

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

  // Builder Base Heroes

  const homeBuilderHeroes = heroes.filter(
    (hero) => hero.village === "builderBase"
  );

  const totalLevelBuilderHeroes = homeBuilderHeroes.reduce(
    (sum, hero) => sum + hero.level,
    0
  );
  const totalMaxLevelBuilderHeroes = homeBuilderHeroes.reduce(
    (sum, hero) => sum + hero.hallMaxLevel,
    0
  );

  const progressPercentageBuilderHeroes =
    (totalLevelHeroes / totalMaxLevelBuilderHeroes) * 100;

  // TROOPS STEP

  const homeTroops = troops.filter((troops) => troops.village === "home");

  const totalLevelTroops = homeTroops.reduce(
    (sum, troops) => sum + troops.level,
    0
  );

  console.log(totalLevelTroops);

  const totalMaxLevelTroops = homeTroops.reduce(
    (sum, troops) => sum + troops.hallMaxLevel,
    0
  );

  const progressPercentageTroops =
    (totalLevelTroops / totalMaxLevelTroops) * 100;

  // Builder Base Troops

  const homeBuilderTroops = troops.filter(
    (troops) => troops.village === "builderBase"
  );

  const totalLevelBuilderTroops = homeBuilderTroops.reduce(
    (sum, troops) => sum + troops.level,
    0
  );

  console.log(totalLevelTroops);

  const totalMaxLevelBuilderTroops = homeBuilderTroops.reduce(
    (sum, troops) => sum + troops.hallMaxLevel,
    0
  );

  const progressPercentageBuilderTroops =
    (totalLevelBuilderTroops / totalMaxLevelBuilderTroops) * 100;

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

  return (
    <main className="panel__content">
      <div className="profile-card">
        <div className="profile-card__picture">
          {/* <img
            src="/img/heroSkin.png"
            alt="Profile"
            className="profile-card__picture-img"
          /> */}
        </div>
        <div className="profile-card__container">
          <div className="profile-card__name">
            <h1 className="profile-card__name-player">{name}</h1>
          </div>
          <div className="profile-card__details">
            <div className="profile-card__detail">
              Town Hall Level: {townHallLevel}
            </div>
            <div className="profile-card__detail">
              Town Hall Weapon Level: {townHallWeaponLevel}
            </div>

            <div className="profile-card__detail">
              Builder Hall Level: {builderHallLevel}
            </div>
            <div className="profile-card__detail">Clan: {clan?.name}</div>
            <div className="profile-card__detail">{role}</div>
          </div>
          <div className="profile-card__stats">
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Expierence Level: {expLevel}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                War Stars: {warStars}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Trophies: {trophies}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Builder Base Trophies {builderBaseTrophies}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Troops Donation: {donations}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Troops Received: {received}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Atack Wins: {attackWins}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Atack Defense: {defenseWins}
              </span>
            </div>
          </div>
          <div className="profile-card__bests">
            <p className="profile-card__bests-label">Player's Bests</p>

            <div className="profile-card__best-container">
              <div className="profile-card__best">
                Best Trophies: {bestTrophies}
              </div>
              <div className="profile-card__best">
                Best Builder Hall Trophies: {bestBuilderBaseTrophies}
              </div>
            </div>
          </div>
          <div className="profile-card__bests">
            <p className="profile-card__bests-label">Player's Tag</p>
            <div className="profile-card__best-container">
              <div className="profile-card__best">{tag}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        <div className="profile-tabs__link">
          <Slider {...settings}>
            <div
              className={`profile-tabs__link-list ${
                activeTab === "Summary" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Summary")}
            >
              Summary
            </div>
            <div
              className={`profile-tabs__link-list ${
                activeTab === "Rankings" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Rankings")}
            >
              Rankings
            </div>
            <div
              className={`profile-tabs__link-list ${
                activeTab === "Army" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Army")}
            >
              Army
            </div>
            <div
              className={`profile-tabs__link-list ${
                activeTab === "Achievements" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Achievements")}
            >
              Achievements
            </div>
          </Slider>
        </div>
        <div className="profile-content">
          {activeTab === "Summary" && (
            <div className="profile-content__summary">
              <div className="profile-content__summary-home">
                <h2 className="profile-content__summary-main">Home Village</h2>
                <div className="profile-content__summary-container">
                  <div className="profile-content__summary-home__heroes">
                    <p className="profile-content__summary-main__name">
                      Heroes
                    </p>
                    {/* <h2 className="profile-content__summary-main"></h2> */}

                    <div className="profile-content__summary-progressbar">
                      <div
                        className="profile-content__summary-progressbar__progress"
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
                  </div>
                  <div className="profile-content__summary-home__heroes">
                    <p className="profile-content__summary-main__name">
                      Troops
                    </p>
                    {/* <h2 className="profile-content__summary-main"></h2> */}

                    <div className="profile-content__summary-progressbar">
                      <div
                        className="profile-content__summary-progressbar__progress"
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
                  <div className="profile-content__summary-home__heroes">
                    <p className="profile-content__summary-main__name">
                      Spells
                    </p>
                    {/* <h2 className="profile-content__summary-main"></h2> */}

                    <div className="profile-content__summary-progressbar">
                      <div
                        className="profile-content__summary-progressbar__progress"
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
                  <div className="profile-content__summary-home__levels"></div>
                </div>
              </div>
              <div className="profile-content__summary-base">
                <h2 className="profile-content__summary-main">Builder Base</h2>
                <div className="profile-content__summary-container">
                  <div className="profile-content__summary-home__heroes">
                    <p className="profile-content__summary-main__name">
                      Heroes
                    </p>
                    {/* <h2 className="profile-content__summary-main"></h2> */}

                    <div className="profile-content__summary-progressbar">
                      <div
                        className="profile-content__summary-progressbar__progress"
                        style={{ width: `${progressPercentageBuilderHeroes}%` }}
                      >
                        <span className="profile-content__summary-main__lvl">
                          {totalLevelBuilderHeroes}
                        </span>
                        /
                        <span className="profile-content__summary-main__lvl">
                          {totalMaxLevelBuilderHeroes}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="profile-content__summary-home__heroes">
                    <p className="profile-content__summary-main__name">
                      Troops
                    </p>
                    {/* <h2 className="profile-content__summary-main"></h2> */}
                    <div className="profile-content__summary-progressbar">
                      <div
                        className="profile-content__summary-progressbar__progress"
                        style={{ width: `${progressPercentageBuilderTroops}%` }}
                      >
                        <span className="profile-content__summary-main__lvl">
                          {totalLevelBuilderTroops}
                        </span>
                        /
                        <span className="profile-content__summary-main__lvl">
                          {totalMaxLevelBuilderTroops}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Rankings" && (
            <div className="profile-content__rankings">
              <p>Tutaj jest treść dla Rankings.</p>
            </div>
          )}
          {activeTab === "Army" && (
            <div className="profile-content__army">
              <p>Tutaj jest treść dla Army.</p>
            </div>
          )}
          {activeTab === "Achievements" && (
            <div className="profile-content__achievements">
              {/* Treść dla Achievements */}
              <p>Tutaj jest treść dla Achievements.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
