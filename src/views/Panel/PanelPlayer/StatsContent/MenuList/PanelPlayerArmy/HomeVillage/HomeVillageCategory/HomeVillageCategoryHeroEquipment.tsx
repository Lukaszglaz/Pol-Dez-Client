/* eslint-disable react-hooks/rules-of-hooks */
import { TROOPS } from "../../../../../../../../utils/data.util";
import { HeroEquipmentGroupItem } from "./HeroEquipment/HeroEquipmentGroupItem";

export const HomeVillageCategoryHeroEquipment: React.FC = () => {
  const equipmentGroupsList = () => {
    return TROOPS.homeVillage.heroEquipmentGroups.map((e) => (
      <HeroEquipmentGroupItem key={e.name} item={e} />
    ));
  };

  return (
    <>
      <div className="selectStats__render">
        <h2 className="selectStats__render-text">Hero Equipment</h2>
        <ul className="selectStats__render-list">{equipmentGroupsList()}</ul>
      </div>
    </>
  );
};
