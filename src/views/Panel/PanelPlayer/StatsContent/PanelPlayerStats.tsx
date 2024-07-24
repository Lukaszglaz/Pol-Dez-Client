import Slider, { Settings } from "react-slick";

import { useState } from "react";
import { PanelPlayerStatsContent } from "./PanelPlayerStatsContent";
export const PanelPlayerStats = () => {
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

  return (
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
      <PanelPlayerStatsContent activeTab={activeTab} />
    </div>
  );
};
