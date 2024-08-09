import Slider, { Settings } from "react-slick";

import { useState } from "react";
import { PanelClanStatsContent } from "./PanelClanStatsContent";
export const PanelClanStats = () => {
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
              activeTab === "Members" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Members")}
          >
            Members
          </div>
          <div
            className={`profile-tabs__link-list ${
              activeTab === "History" ? "active" : ""
            }`}
            onClick={() => handleTabClick("History")}
          >
            History
          </div>
          <div
            className={`profile-tabs__link-list ${
              activeTab === "Wars" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Wars")}
          >
            Wars
          </div>
          <div
            className={`profile-tabs__link-list ${
              activeTab === "Rankings" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Rankings")}
          >
            Rankings
          </div>
        </Slider>
      </div>
      <PanelClanStatsContent activeTab={activeTab} />
    </div>
  );
};
