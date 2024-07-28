import React from "react";
import { Troop } from "../../../../../../../utils/data.util";

interface TroopItemProps {
  item: Troop;
  isActive: boolean; // Dodaj nową właściwość
}

export const TroopItem: React.FC<TroopItemProps> = ({ item, isActive }) => {
  return (
    <li className="selectStats__render-list__item">
      <img
        src={item.imgSource}
        alt={item.name}
        className={`item__image ${isActive ? "active" : "inactive"}`}
      />
      <div className="troop__info">
        <h3 className="troop__info-name">{item.name}</h3>
      </div>
    </li>
  );
};
