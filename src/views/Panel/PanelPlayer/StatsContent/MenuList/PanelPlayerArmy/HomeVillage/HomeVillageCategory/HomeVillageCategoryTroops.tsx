import { usePanelInfo } from "../../../../../../../../contexts/panel.context";
import { Troop, TROOPS } from "../../../../../../../../utils/data.util";
import { TroopItem } from "../../TroopItem/TroopItem";

export const HomeVillageCategoryTroops = () => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { troops } = player;

  const isTroopActive = (troop: Troop): boolean => {
    return troops.some((t) => t.name === troop.name);
  };
  const filterTroops = (troop: Troop): boolean => {
    return !TROOPS.homeVillage.heroPets.some(
      (pet) => pet.unlockBuilding === troop.unlockBuilding
    );
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Troops</h2>
      <ul className="selectStats__render-list">
        {TROOPS.homeVillage.elixirTroops
          .filter(filterTroops)
          .map((troop: Troop, index: number) => (
            <TroopItem
              key={index}
              item={troop}
              isActive={isTroopActive(troop)}
            />
          ))}
        {TROOPS.homeVillage.darkElixirTroops
          .filter(filterTroops)
          .map((troop: Troop, index: number) => (
            <TroopItem
              key={index}
              item={troop}
              isActive={isTroopActive(troop)}
            />
          ))}
        {TROOPS.homeVillage.superTroops
          .filter(filterTroops)
          .map((troop: Troop, index: number) => (
            <TroopItem
              key={index}
              item={troop}
              isActive={isTroopActive(troop)}
            />
          ))}
      </ul>
    </div>
  );
};
