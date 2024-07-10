// import { useEffect } from "react";
// import { callApi } from "../../../utils/api";
// import { Method, PlayerResponse } from "../../../types";
import Slider, { Settings } from "react-slick";
import { usePanelInfo } from "../../../contexts/panel.context";

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
  } = player;

  const settings: Settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <main className="panel__content">
      <div className="profile-card">
        <div className="profile-card__picture">
          <img
            src="/img/heroSkin.png"
            alt="Profile"
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
              <div className="profile-card__best">#YCQ09GGG</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        <div className="profile-tabs__link">
          <Slider {...settings}>
            <div className="profile-tabs__link-list">Summary</div>
            <div className="profile-tabs__link-list">Rankings</div>
            <div className="profile-tabs__link-list">Army</div>
            <div className="profile-tabs__link-list">Achievements</div>
          </Slider>
        </div>
      </div>
    </main>
  );
};
