import { usePanelInfo } from "../../../../../../../../contexts/panel.context";
import { Hero, TROOPS } from "../../../../../../../../utils/data.util";
import { TroopItem } from "../../TroopItem/TroopItem";

export const HomeVillageCategoryHeroes: React.FC = () => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { heroes } = player;

  const isHeroActive = (hero: Hero): boolean => {
    return heroes.some((h) => h.name === hero.name);
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Heroes</h2>
      <ul className="selectStats__render-list">
        {TROOPS.homeVillage.heroes.map((hero: Hero, index: number) => (
          <TroopItem key={index} item={hero} isActive={isHeroActive(hero)} />
        ))}
      </ul>
    </div>
  );
};
