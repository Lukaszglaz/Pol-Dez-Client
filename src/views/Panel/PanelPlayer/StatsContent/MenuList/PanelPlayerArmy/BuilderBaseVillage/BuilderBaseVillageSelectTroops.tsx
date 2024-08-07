import { useState } from "react";
import { usePanelInfo } from "../../../../../../../contexts/panel.context";
import { CategoryButtons } from "./BuilderBaseVillageCategoryButton";
import { BuilderBaseVillageCategoryHeroes } from "./BuilderBaseVillageCategory/BuilderBaseVillageCategoryHeroes";
import { BuilderBaseVillageCategoryTroops } from "./BuilderBaseVillageCategory/BuilderBaseVillageCategoryTroops";

export const BuilderBaseVillageSelectTroops: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"heroes" | "troops">(
    "troops"
  );

  const { player } = usePanelInfo();
  if (!player) return null;

  const handleCategoryClick = (category: "heroes" | "troops") => {
    setSelectedCategory(category);
  };

  return (
    <div className="profile-content__army-selectStats">
      <CategoryButtons onCategoryClick={handleCategoryClick} />
      {selectedCategory === "heroes" && <BuilderBaseVillageCategoryHeroes />}
      {selectedCategory === "troops" && <BuilderBaseVillageCategoryTroops />}
    </div>
  );
};
