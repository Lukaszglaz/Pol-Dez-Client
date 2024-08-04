/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Troop } from "../../../../../../../utils/data.util";
import { TroopModal } from "../../../../../../../components/modals/TroopModal";
import { usePanelInfo } from "../../../../../../../contexts/panel.context";

interface Props {
  item: Troop;
}

export const TroopItem = ({ item }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { troops } = player;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const { name, imgSource } = item;

  const isOwned = () => troops.some((t) => t.name === name);

  return (
    <>
      {showModal && <TroopModal setShowModal={setShowModal} name={name} />}

      <li onClick={openModal} className="selectStats__render-list__item">
        <img
          src={imgSource}
          alt={name}
          className={`item__image ${isOwned() ? "active" : "inactive"}`}
        />
        <div className="troop__info">
          <h3 className="troop__info-name">{name}</h3>
          <p className="troop__info-name">
            Status: {isOwned() ? "Available" : "Not available"}
          </p>
        </div>
      </li>
    </>
  );
};
