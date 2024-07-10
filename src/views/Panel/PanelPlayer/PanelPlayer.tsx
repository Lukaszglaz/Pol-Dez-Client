// import { useEffect } from "react";
// import { callApi } from "../../../utils/api";
// import { Method, PlayerResponse } from "../../../types";
import Slider, { Settings } from "react-slick";

export const PanelPlayer = () => {
  // const getData = async () => {
  //   const response = await callApi<PlayerResponse>(
  //     "panel/player",
  //     Method.Get,
  //     {}
  //   );
  // };
  // useEffect(() => {
  //   getData();
  // });

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
            <h1 className="profile-card__name-player">Fokusik</h1>
          </div>
          <div className="profile-card__details">
            <div className="profile-card__detail">TH 13</div>
            <div className="profile-card__detail">BH 9</div>
            <div className="profile-card__detail">Poland</div>
            <div className="profile-card__detail">Polska Dezerter</div>
            <div className="profile-card__detail">CoLeader</div>
          </div>
          <div className="profile-card__stats">
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">224</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">2,112</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">2,670</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">22,035</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">3,912</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">0</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">0</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">0</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">0</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">0</span>
            </div>
          </div>
          <div className="profile-card__bests">
            <p className="profile-card__bests-label">Player's Bests</p>

            <div className="profile-card__best-container">
              <div className="profile-card__best">7,698</div>
              <div className="profile-card__best">3,971</div>
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
