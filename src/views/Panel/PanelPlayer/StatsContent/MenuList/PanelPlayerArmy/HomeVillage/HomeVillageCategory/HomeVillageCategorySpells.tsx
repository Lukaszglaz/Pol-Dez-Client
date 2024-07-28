import { usePanelInfo } from "../../../../../../../../contexts/panel.context";
import { Spells, TROOPS } from "../../../../../../../../utils/data.util";
import { TroopItem } from "../../TroopItem/TroopItem";

export const HomeVillageCategorySpells = () => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { spells } = player;

  const isSpellActive = (spell: Spells): boolean => {
    return spells.some((s) => s.name === spell.name);
  };

  return (
    <div className="selectStats__render">
      <h2 className="selectStats__render-text">Spells</h2>
      <ul className="selectStats__render-list">
        {TROOPS.homeVillage.elixirSpells.map((spell: Spells, index: number) => (
          <TroopItem key={index} item={spell} isActive={isSpellActive(spell)} />
        ))}
        {TROOPS.homeVillage.darkElixirSpells.map(
          (spell: Spells, index: number) => (
            <TroopItem
              key={index}
              item={spell}
              isActive={isSpellActive(spell)}
            />
          )
        )}
      </ul>
    </div>
  );
};
