import { useState } from "react";
import { HomeVillageTroops } from "./HomeVillage/HomeVillageTroops";
import { BuilderBaseVillageTroops } from "./BuilderBaseVillage/BuilderBaseVillageTroops";

export const PanelPlayerArmy: React.FC = () => {
  const [selectedVillage, setSelectedVillage] = useState<
    "home" | "builderBase"
  >("home");

  const handleVillageClick = (village: "home" | "builderBase") => {
    setSelectedVillage(village);
  };

  const renderContent = () => {
    switch (selectedVillage) {
      case "home":
        return <HomeVillageTroops />;
      case "builderBase":
        return <BuilderBaseVillageTroops />;
      default:
        return null;
    }
  };

  return (
    <div className="panel-player__army-container">
      <div className="profile-content__army-selectBase">
        <h2>Please select a village</h2>
        <p>
          The village you choose will display the statistics of all heroes in
          your village below.
        </p>
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
      {renderContent()}
    </div>
  );
};
