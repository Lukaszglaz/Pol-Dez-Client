import { Dispatch, SetStateAction } from "react";
import { Modal } from "../common/Modal/Modal";
import { usePanelInfo } from "../../contexts/panel.context";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  name: string;
}

export const SpellModal = ({ setShowModal, name }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { spells } = player;

  const spell = spells.find((spell) => spell.name === name);

  if (!spell) return null;

  const {
    name: spellName,
    level,
    hallMaxLevel,
    maxLevel,
    upgradeCost,
    upgradeTime,
  } = spell;

  const progressPercentageSpell = (level / hallMaxLevel) * 100;

  function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  const formattedTime = formatTime(upgradeTime);

  return (
    <Modal setShowModal={setShowModal}>
      <div className="modal__container">
        <div className="modal__container-first">
          <h2>{spellName}</h2>
          <h3>Level:</h3>
          <div className="profile-content__summary-containerArmy__progressbar">
            <div
              className="profile-content__summary-containerArmy__progressbar-progress"
              style={{ width: `${progressPercentageSpell}%` }}
            >
              <span className="profile-content__summary-main__lvl">
                {level}
              </span>
              /
              <span className="profile-content__summary-main__lvl">
                {hallMaxLevel}
              </span>
            </div>
          </div>
        </div>
        <div className="modal__container-second">
          <div className="modal__container-second__stats">
            <div className="modal__container-second__stats-container">
              Upgrade Cost:
              <p>{upgradeCost}</p>
            </div>
            <div className="modal__container-second__stats-container">
              Upgrade Time:
              <p>{formattedTime}</p>
            </div>
            <div className="modal__container-second__stats-container">
              Max Level:
              <p>{maxLevel}</p>
            </div>
          </div>
        </div>
        <p>More data soon...</p>
      </div>
    </Modal>
  );
};
