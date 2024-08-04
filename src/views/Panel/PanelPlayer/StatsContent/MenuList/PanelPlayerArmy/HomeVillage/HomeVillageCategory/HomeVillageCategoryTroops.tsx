import { Troop, TROOPS } from "../../../../../../../../utils/data.util";
import { TroopItem } from "../../Items/TroopItem";

export const HomeVillageCategoryTroops = () => {
  const filterTroops = (troop: Troop): boolean => {
    return !TROOPS.homeVillage.heroPets.some(
      (pet) => pet.unlockBuilding === troop.unlockBuilding
    );
  };

  const elixirTroopsList = () => {
    return TROOPS.homeVillage.Troops.elixirTroops
      .filter(filterTroops)
      .map((troop: Troop) => <TroopItem key={troop.name} item={troop} />);
  };

  const darkElixirTroopsList = () => {
    return TROOPS.homeVillage.Troops.darkElixirTroops
      .filter(filterTroops)
      .map((troop: Troop) => <TroopItem key={troop.name} item={troop} />);
  };

  const superTroopsList = () => {
    return TROOPS.homeVillage.Troops.superTroops
      .filter(filterTroops)
      .map((troop: Troop) => <TroopItem key={troop.name} item={troop} />);
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Troops</h2>
      <ul className="selectStats__render-list">
        {elixirTroopsList()}
        {darkElixirTroopsList()}
        {superTroopsList()}
      </ul>
    </div>
  );
};
