/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Spells } from "../../../../../../../utils/data.util";
import { usePanelInfo } from "../../../../../../../contexts/panel.context";
import { SpellModal } from "../../../../../../../components/modals/SpellModal";

interface Props {
  item: Spells;
}

export const SpellItem = ({ item }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { spells } = player;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const { name, imgSource } = item;

  const isOwned = () => spells.some((s) => s.name === name);

  return (
    <>
      {showModal && <SpellModal setShowModal={setShowModal} name={name} />}

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
