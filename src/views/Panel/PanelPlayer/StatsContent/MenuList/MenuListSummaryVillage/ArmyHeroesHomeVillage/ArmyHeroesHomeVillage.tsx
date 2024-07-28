import { usePanelInfo } from "../../../../../../../contexts/panel.context";

export const ArmyHeroesHomeVillage = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { heroes } = player;

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

  // Step Other Level Heroes

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

  return (
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
      <h3>Hero levels left:</h3>
      <div className="profile-content__summary-containerArmy__levelLeft">
        <div className="levelLeft__container">
          <img
            src="/img/Summary/ArmyTh/LevelLeft/hero-0.png"
            alt="Archer image"
            className="levelLeft__container-image"
          />
          <div className="levelLeft__container-statLeft">+ {heroLeft}</div>
        </div>
        <div className="levelLeft__container">
          <img
            src="/img/Summary/ArmyTh/LevelLeft/hero-1.webp"
            alt="Hero"
            className="levelLeft__container-image"
          />
          <div className="levelLeft__container-statLeft">+ {archerLeft}</div>
        </div>
        <div className="levelLeft__container">
          <img
            src="/img/Summary/ArmyTh/LevelLeft/hero-2.png"
            alt="Warden image"
            className="levelLeft__container-image"
          />
          <div className="levelLeft__container-statLeft">+ {wardenLeft}</div>
        </div>
        <div className="levelLeft__container">
          <img
            src="/img/Summary/ArmyTh/LevelLeft/hero-3.webp"
            alt="Champion image"
            className="levelLeft__container-image"
          />
          <div className="levelLeft__container-statLeft">+ {championLeft}</div>
        </div>
      </div>
    </div>
  );
};
