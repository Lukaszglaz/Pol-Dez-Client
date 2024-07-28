import { usePanelInfo } from "../../../../../../../contexts/panel.context";

export const ArmyHeroesBuilderVillage = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { heroes } = player;

  const homeHeroes = heroes.filter((hero) => hero.village === "home");

  const totalLevelHeroes = homeHeroes.reduce(
    (sum, hero) => sum + hero.level,
    0
  );

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

  // Step Other Level Heroes

  const machineBuilderLeft = heroes.at(3)
    ? (heroes.at(3)?.hallMaxLevel ?? 0) - (heroes.at(3)?.level ?? 0)
    : 0;
  const copterBuilderLeft = heroes.at(5)
    ? (heroes.at(5)?.hallMaxLevel ?? 0) - (heroes.at(5)?.level ?? 0)
    : 0;

  return (
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
      <h3>Hero levels left:</h3>
      <div className="profile-content__summary-containerArmy__levelLeft">
        <div className="levelLeft__container">
          <img
            src="/img/Summary/ArmyBs/LevelLeft/hero-3.png"
            alt="Machine builder image"
            className="levelLeft__container-image"
          />
          <div className="levelLeft__container-statLeft">
            + {machineBuilderLeft}
          </div>
        </div>
        <div className="levelLeft__container">
          <img
            src="/img/Summary/ArmyBs/LevelLeft/hero-5.webp"
            alt="Copter builder image"
            className="levelLeft__container-image"
          />
          <div className="levelLeft__container-statLeft">
            + {copterBuilderLeft}
          </div>
        </div>
      </div>
    </div>
  );
};
