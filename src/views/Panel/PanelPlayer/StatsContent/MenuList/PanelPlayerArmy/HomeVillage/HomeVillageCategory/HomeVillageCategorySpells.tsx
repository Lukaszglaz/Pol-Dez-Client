import { Spells, TROOPS } from "../../../../../../../../utils/data.util";
import { SpellItem } from "../../Items/SpellItem";

export const HomeVillageCategorySpells = () => {
  const elixirSpellsList = () => {
    return TROOPS.homeVillage.Spells.elixirSpells.map((spell: Spells) => (
      <SpellItem key={spell.name} item={spell} />
    ));
  };

  const darkElixirSpellsList = () => {
    return TROOPS.homeVillage.Spells.darkElixirSpells.map((spell: Spells) => (
      <SpellItem key={spell.name} item={spell} />
    ));
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Spells</h2>
      <ul className="selectStats__render-list">
        {elixirSpellsList()}
        {darkElixirSpellsList()}
      </ul>
    </div>
  );
};
