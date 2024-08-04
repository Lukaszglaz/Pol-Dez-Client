/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Hero } from "../../../../../../../utils/data.util";
import { usePanelInfo } from "../../../../../../../contexts/panel.context";
import { HeroModal } from "../../../../../../../components/modals/HeroModal";

interface Props {
  item: Hero;
}

export const HeroItem = ({ item }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { heroes } = player;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const { name, imgSource } = item;

  const isOwned = () => heroes.some((h) => h.name === name);

  return (
    <>
      {showModal && <HeroModal setShowModal={setShowModal} name={name} />}

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
