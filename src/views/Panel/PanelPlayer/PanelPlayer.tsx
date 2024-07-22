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
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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

  // Level Max heroes - Level min

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

  const machineBuilderLeft = heroes.at(3)
    ? (heroes.at(3)?.hallMaxLevel ?? 0) - (heroes.at(3)?.level ?? 0)
    : 0;
  const copterBuilderLeft = heroes.at(5)
    ? (heroes.at(5)?.hallMaxLevel ?? 0) - (heroes.at(5)?.level ?? 0)
    : 0;

  return (
    <main className="panel__content">
      <div className="profile-card">
        <div className="profile-card__picture">
          <img
            src="/img/RoyalChampion_Pose03.png"
            alt="Profile Pose 01"
            className="profile-card__picture-img"
          />
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
            <div className="profile-card__detail">Role Clan: {role}</div>
          </div>
          <div className="profile-card__stats">
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                Exp Level: {expLevel}
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
                      <div className="profile-content__summary-containerArmy__levelLeft">
                        <div className="levelLeft__container">
                          <img
                            src="/img/Summary/ArmyTh/LevelLeft/hero-0.png"
                            alt="Hero"
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
                            alt="Hero"
                            className="levelLeft__container-image"
                          />
                          <div className="levelLeft__container-statLeft">
                            + {wardenLeft}
                          </div>
                        </div>
                        <div className="levelLeft__container">
                          <img
                            src="/img/Summary/ArmyTh/LevelLeft/hero-3.webp"
                            alt="Hero"
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
                        alt="Hero Image"
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
                        alt="Hero Image"
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
              <div className="profile-content__summary-base">
                <h2 className="profile-content__summary-main">Builder Base</h2>
                <div className="profile-content__summary-container">
                  <div className="profile-content__summary-home__heroes">
                    <div className="profile-content__summary-home__image">
                      <img
                        className="profile-content__summary-home__image"
                        src="/public/img/summary/armybs/hero-3.png"
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
                          style={{
                            width: `${progressPercentageBuilderHeroes}%`,
                          }}
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
                      <div className="profile-content__summary-containerArmy__levelLeft">
                        <div className="levelLeft__container">
                          <img
                            src="/img/Summary/ArmyBs/LevelLeft/hero-3.png"
                            alt="Hero"
                            className="levelLeft__container-image"
                          />
                          <div className="levelLeft__container-statLeft">
                            + {machineBuilderLeft}
                          </div>
                        </div>
                        <div className="levelLeft__container">
                          <img
                            src="/img/Summary/ArmyBs/LevelLeft/hero-5.webp"
                            alt="Hero"
                            className="levelLeft__container-image"
                          />
                          <div className="levelLeft__container-statLeft">
                            + {copterBuilderLeft}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-content__summary-home__heroes">
                    <div className="profile-content__summary-home__image">
                      <img
                        className="profile-content__summary-home__image"
                        src="/public/img/summary/armybs/troop-19.png"
                        alt="Hero Image"
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
                          style={{
                            width: `${progressPercentageBuilderTroops}%`,
                          }}
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
