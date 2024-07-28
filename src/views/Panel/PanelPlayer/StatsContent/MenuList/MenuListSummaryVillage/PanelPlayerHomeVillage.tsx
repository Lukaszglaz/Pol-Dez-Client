import { usePanelInfo } from "../../../../../../contexts/panel.context";
import { ArmyHeroesHomeVillage } from "./ArmyHeroesHomeVillage/ArmyHeroesHomeVillage";

export const PanelPlayerHomeVillage = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { troops, spells } = player;

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
          <ArmyHeroesHomeVillage />
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
