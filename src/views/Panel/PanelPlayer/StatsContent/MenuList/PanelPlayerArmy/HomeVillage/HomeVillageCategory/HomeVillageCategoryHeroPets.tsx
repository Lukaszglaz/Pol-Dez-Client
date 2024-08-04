import { Troop, TROOPS } from "../../../../../../../../utils/data.util";
import { HeroPetItem } from "../../Items/HeroPetItem";

export const HomeVillageCategoruHeroPets: React.FC = () => {
  const shouldDisplayTroop = (troop: Troop): boolean => {
    return TROOPS.homeVillage.heroPets.some(
      (pet) => pet.unlockBuilding === troop.unlockBuilding
    );
  };

  const heroPetsFilter = () => {
    return TROOPS.homeVillage.heroPets
      .filter(shouldDisplayTroop)
      .map((troop: Troop) => <HeroPetItem key={troop.name} item={troop} />);
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Pets</h2>
      <ul className="selectStats__render-list">{heroPetsFilter()}</ul>
    </div>
  );
};
