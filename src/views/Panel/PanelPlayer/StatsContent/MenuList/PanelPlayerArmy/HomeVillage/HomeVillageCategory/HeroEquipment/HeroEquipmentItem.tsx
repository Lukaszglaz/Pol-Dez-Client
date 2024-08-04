/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Equipment } from "../../../../../../../../../utils/data.util";
import { HeroEquipmentModal } from "../../../../../../../../../components/modals/HeroEquipmentModal";
import { usePanelInfo } from "../../../../../../../../../contexts/panel.context";

interface Props {
  item: Equipment;
}

export const HeroEquipmentItem = ({ item }: Props) => {
  const { player } = usePanelInfo();

  if (!player) return null;

  const { heroEquipment } = player;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(isOwned());
  };

  const { name, imgSource } = item;

  const isOwned = () => !!heroEquipment.find((e) => e.name === item.name);
  return (
    <>
      {showModal && (
        <HeroEquipmentModal setShowModal={setShowModal} name={name} />
      )}
      <li onClick={openModal} className="selectStats__render-list__item">
        <img
          src={imgSource}
          alt={name}
          className={`item__image ${isOwned() ? "active" : "inactive"}`}
        />
        <span className={isOwned() ? "active" : "inactive"}>{name}</span>
        <p className="troop__info-name">
          Status: {isOwned() ? "Available" : "Not available"}
        </p>
      </li>
    </>
  );
};
