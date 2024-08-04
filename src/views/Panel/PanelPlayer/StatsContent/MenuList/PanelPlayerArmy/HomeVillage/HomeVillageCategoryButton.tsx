interface CategoryButtonsProps {
  onCategoryClick: (
    category:
      | "heroes"
      | "heroEquipment"
      | "heroPets"
      | "troops"
      | "spells"
      | "siegeMachines"
  ) => void;
}

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  onCategoryClick,
}) => {
  return (
    <div className="selectStats__container">
      <h2 className="selectStats__container-text">Select the category.</h2>
      <p className="selectStats__container-textUnder">
        The category for which you want to display items.
      </p>
      <button
        className="selectStats__container-button"
        onClick={() => onCategoryClick("heroes")}
      >
        Heroes
      </button>
      <button
        className="selectStats__container-button"
        onClick={() => onCategoryClick("heroEquipment")}
      >
        Hero Equipment
      </button>
      <button
        className="selectStats__container-button"
        onClick={() => onCategoryClick("heroPets")}
      >
        Hero Pets
      </button>
      <button
        className="selectStats__container-button"
        onClick={() => onCategoryClick("troops")}
      >
        Troops
      </button>
      <button
        className="selectStats__container-button"
        onClick={() => onCategoryClick("spells")}
      >
        Spells
      </button>
      <button
        className="selectStats__container-button"
        onClick={() => onCategoryClick("siegeMachines")}
      >
        Siege Machines
      </button>
      <p className="selectStats__container-textMore">
        Click on an individual container, of an item to see all the information.
      </p>
    </div>
  );
};
