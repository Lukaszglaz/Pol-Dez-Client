/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Troop } from "../../../../../../../utils/data.util";
import { HeroPetModal } from "../../../../../../../components/modals/HeroPetModal";
import { usePanelInfo } from "../../../../../../../contexts/panel.context";

interface Props {
  item: Troop;
}

export const HeroPetItem = ({ item }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { troops } = player;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const { name, imgSource } = item;

  const isOwned = () => troops.some((p) => p.name === name);

  return (
    <>
      {showModal && <HeroPetModal setShowModal={setShowModal} name={name} />}

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
