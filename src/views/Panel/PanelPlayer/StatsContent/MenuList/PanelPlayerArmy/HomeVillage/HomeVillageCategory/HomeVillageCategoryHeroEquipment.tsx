import { usePanelInfo } from "../../../../../../../../contexts/panel.context";
import {
  Equipment,
  TROOPS,
  HeroEquipment,
} from "../../../../../../../../utils/data.util";

export const HomeVillageCategoryHeroEquipment: React.FC = () => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { heroEquipment } = player;

  const isEquipmentActive = (equipment: Equipment): boolean => {
    return heroEquipment.some((e) => e.name === equipment.name);
  };

  const isGroupActive = (heroEquipmentGroup: HeroEquipment): boolean => {
    return heroEquipmentGroup.equipment.some((e) => isEquipmentActive(e));
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Hero Equipment</h2>
      <ul className="selectStats__render-list">
        {TROOPS.homeVillage.heroEquipment.map(
          (heroEquipmentGroup: HeroEquipment, index: number) => {
            const groupActive = isGroupActive(heroEquipmentGroup);
            return (
              <li
                key={index}
                className={`selectStats__render-list__itemEquipment ${
                  groupActive ? "active" : "inactive"
                }`}
              >
                <h3>{heroEquipmentGroup.name}</h3>
                <img
                  src={heroEquipmentGroup.imgSource}
                  alt={heroEquipmentGroup.name}
                  className={`item__image ${
                    groupActive ? "active" : "inactive"
                  }`}
                />
                <ul className="selectStats__render-list">
                  {heroEquipmentGroup.equipment.map(
                    (equipment: Equipment, eqIndex: number) => {
                      const isItemActive = isEquipmentActive(equipment);
                      return (
                        <li
                          key={eqIndex}
                          className={`selectStats__render-list__item ${
                            isItemActive ? "active" : "inactive"
                          }`}
                        >
                          <img
                            src={equipment.imgSource}
                            alt={equipment.name}
                            className={`item__image ${
                              isItemActive ? "active" : "inactive"
                            }`}
                          />
                          <span
                            className={isItemActive ? "active" : "inactive"}
                          >
                            {equipment.name}
                          </span>
                        </li>
                      );
                    }
                  )}
                </ul>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
