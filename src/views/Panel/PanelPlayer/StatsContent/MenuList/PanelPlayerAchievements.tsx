/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import star0 from "/img/Achievements/Stars/stars-0.webp";
import star1 from "/img/Achievements/Stars/stars-1.webp";
import star2 from "/img/Achievements/Stars/stars-2.webp";
import star3 from "/img/Achievements/Stars/stars-3.webp";
import { usePanelInfo } from "../../../../../contexts/panel.context";

export const PanelPlayerAchievements = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { achievements } = player;

  const getStarImage = (stars: number) => {
    switch (stars) {
      case 0:
        return star0;
      case 1:
        return star1;
      case 2:
        return star2;
      case 3:
        return star3;
    }
  };

  // Achievement

  const [selectedVillage, setSelectedVillage] = useState<
    "home" | "builderBase"
  >("home");

  const handleVillageClick = (village: "home" | "builderBase") => {
    setSelectedVillage(village);
  };

  const filteredAchievements = achievements.filter(
    (achievement) => achievement.village === selectedVillage
  );

  const formatNumberWithCommas = (number: { toString: () => string }) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="profile-content__achievements">
      <div className="profile-content__achievements-selectBase">
        <div
          className={`selectBase__button ${
            selectedVillage === "home" ? "selected" : ""
          }`}
          onClick={() => handleVillageClick("home")}
        >
          Home village
        </div>
        <div
          className={`selectBase__button ${
            selectedVillage === "builderBase" ? "selected" : ""
          }`}
          onClick={() => handleVillageClick("builderBase")}
        >
          Builder village
        </div>
      </div>

      <div className="profile-content__achievements-container">
        {filteredAchievements.map((achievement, index) => (
          <div key={index} className="container__achievement">
            <div className="container__achievement-main">
              <p className="main__text">{achievement.name}</p>
              <div className="main__text-container">
                <img
                  className="main__text-container__image"
                  src={getStarImage(achievement.stars)}
                  alt={`Stars: ${achievement.stars}`}
                />
              </div>
            </div>

            <div className="container__achievement-progressbar">
              <div
                className="progressbar__fill"
                style={{
                  width: `${(achievement.value / achievement.target) * 100}%`,
                }}
              />
            </div>
            <p className="container__achievement-text">
              {formatNumberWithCommas(achievement.value)} /{" "}
              {formatNumberWithCommas(achievement.target)}
            </p>
            <p className="container__achievement-text">
              Achievement Information:
              <br />
              <span>{achievement.info}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
