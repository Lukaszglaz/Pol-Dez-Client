import { Troop, TROOPS } from "../../../../../../../../utils/data.util";
import { TroopItem } from "../../Items/TroopItem";

export const BuilderBaseVillageCategoryTroops = () => {
  const elixirTroopsList = () => {
    return TROOPS.builderBaseVillage.troops.map((troop: Troop) => (
      <TroopItem key={troop.name} item={troop} />
    ));
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Troops</h2>
      <ul className="selectStats__render-list">{elixirTroopsList()}</ul>
    </div>
  );
};
