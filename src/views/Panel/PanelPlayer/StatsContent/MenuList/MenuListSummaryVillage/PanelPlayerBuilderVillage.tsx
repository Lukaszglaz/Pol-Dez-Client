import { usePanelInfo } from "../../../../../../contexts/panel.context";
import { ArmyHeroesBuilderVillage } from "./ArmyHeroesBuilderVillage/ArmyHeroesBuilderVillage";

export const PanelPlayerBuilderVillage = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { troops } = player;

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

  return (
    <div className="profile-content__summary-base">
      <h2 className="profile-content__summary-main">Builder Base</h2>
      <div className="profile-content__summary-container">
        <div className="profile-content__summary-home__heroes">
          <div className="profile-content__summary-home__image">
            <img
              className="profile-content__summary-home__image"
              src="/public/img/summary/armybs/hero-3.png"
              alt="Builder hero image"
            />
          </div>
          <ArmyHeroesBuilderVillage />
        </div>
        <div className="profile-content__summary-home__heroes">
          <div className="profile-content__summary-home__image">
            <img
              className="profile-content__summary-home__image"
              src="/public/img/summary/armybs/troop-19.png"
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
  );
};
