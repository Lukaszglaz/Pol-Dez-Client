interface CategoryButtonsProps {
  onCategoryClick: (category: "heroes" | "troops") => void;
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
        onClick={() => onCategoryClick("troops")}
      >
        Troops
      </button>

      <p className="selectStats__container-textMore">
        Click on an individual container, of an item to see all the information.
      </p>
    </div>
  );
};
