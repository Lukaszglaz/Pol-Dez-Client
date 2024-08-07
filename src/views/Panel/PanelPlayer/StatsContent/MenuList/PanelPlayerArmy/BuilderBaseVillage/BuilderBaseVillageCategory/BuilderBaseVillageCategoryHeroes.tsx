import { Hero, TROOPS } from "../../../../../../../../utils/data.util";
import { HeroItem } from "../../Items/HeroItem";

export const BuilderBaseVillageCategoryHeroes: React.FC = () => {
  const heroesList = () => {
    return TROOPS.builderBaseVillage.heroes.map((hero: Hero) => (
      <HeroItem key={hero.name} item={hero} />
    ));
  };

  return (
    <>
      <div className="selectStats__render">
        <h2 className="selectStats__render-text">Heroes</h2>
        <ul className="selectStats__render-list">{heroesList()}</ul>
      </div>
    </>
  );
};
