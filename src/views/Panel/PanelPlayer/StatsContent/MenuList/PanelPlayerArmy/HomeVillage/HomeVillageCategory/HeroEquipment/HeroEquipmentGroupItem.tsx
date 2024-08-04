import { usePanelInfo } from "../../../../../../../../../contexts/panel.context";
import { HeroEquipmentGroup } from "../../../../../../../../../utils/data.util";
import { HeroEquipmentItem } from "./HeroEquipmentItem";

interface Props {
  item: HeroEquipmentGroup;
}

export const HeroEquipmentGroupItem = ({ item }: Props) => {
  const { player } = usePanelInfo();

  if (!player) return null;

  const { heroes } = player;

  const { name, imgSource, equipment } = item;

  const equipmentsList = () => {
    return equipment.map((e) => <HeroEquipmentItem key={e.name} item={e} />);
  };

  const isOwned = () => !!heroes.find((h) => h.name === name);

  return (
    <li className="selectStats__render-list__itemEquipment">
      <h3>{name}</h3>
      <img
        src={imgSource}
        alt={name}
        className={`item__image ${isOwned() ? "active" : "inactive"}`}
      />
      <ul className="selectStats__render-list">{equipmentsList()}</ul>
    </li>
  );
};
