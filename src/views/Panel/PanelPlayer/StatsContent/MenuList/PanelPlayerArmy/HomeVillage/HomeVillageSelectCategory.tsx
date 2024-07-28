import { useState } from "react";
import { usePanelInfo } from "../../../../../../../contexts/panel.context";
import { CategoryButtons } from "./HomeVillageCategoryButton";
import { HomeVillageCategoryHeroes } from "./HomeVillageCategory/HomeVillageCategoryHeroes";
import { HomeVillageCategoryHeroEquipment } from "./HomeVillageCategory/HomeVillageCategoryHeroEquipment";
import { HomeVillageCategoruHeroPets } from "./HomeVillageCategory/HomeVillageCategoryHeroPets";
import { HomeVillageCategoryTroops } from "./HomeVillageCategory/HomeVillageCategoryTroops";
import { HomeVillageCategorySpells } from "./HomeVillageCategory/HomeVillageCategorySpells";
import { HomeVillageCategorySiegeMachines } from "./HomeVillageCategory/HomeVillageCategorySiegeMachines";

export const HomeVillageSelectCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    | "heroes"
    | "heroEquipment"
    | "heroPets"
    | "troops"
    | "spells"
    | "siegeMachines"
  >("troops");

  const { player } = usePanelInfo();
  if (!player) return null;

  const handleCategoryClick = (
    category:
      | "heroes"
      | "heroEquipment"
      | "heroPets"
      | "troops"
      | "spells"
      | "siegeMachines"
  ) => {
    setSelectedCategory(category);
  };

  return (
    <div className="profile-content__army-selectStats">
      <CategoryButtons onCategoryClick={handleCategoryClick} />
      {selectedCategory === "heroes" && <HomeVillageCategoryHeroes />}
      {selectedCategory === "heroEquipment" && (
        <HomeVillageCategoryHeroEquipment />
      )}
      {selectedCategory === "heroPets" && <HomeVillageCategoruHeroPets />}
      {selectedCategory === "troops" && <HomeVillageCategoryTroops />}
      {selectedCategory === "spells" && <HomeVillageCategorySpells />}
      {selectedCategory === "siegeMachines" && (
        <HomeVillageCategorySiegeMachines />
      )}
    </div>
  );
};
