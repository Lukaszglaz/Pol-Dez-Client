import { Dispatch, SetStateAction } from "react";
import { Modal } from "../common/Modal/Modal";
import { usePanelInfo } from "../../contexts/panel.context";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  name: string;
}

export const TroopModal = ({ setShowModal, name }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { troops } = player;

  const troop = troops.find((troop) => troop.name === name);

  if (!troop) return null;

  const {
    name: troopName,
    dps,
    level,
    hallMaxLevel,
    maxLevel,
    upgradeCost,
    upgradeTime,
  } = troop;

  const progressPercentageTroops = (level / hallMaxLevel) * 100;

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
          <h2>{troopName}</h2>
          <h3>Level:</h3>
          <div className="profile-content__summary-containerArmy__progressbar">
            <div
              className="profile-content__summary-containerArmy__progressbar-progress"
              style={{ width: `${progressPercentageTroops}%` }}
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
              Damage per second:
              <p>{dps}</p>
            </div>
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
