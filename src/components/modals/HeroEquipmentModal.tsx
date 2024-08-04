import { Dispatch, SetStateAction } from "react";
import { usePanelInfo } from "../../contexts/panel.context";
import { Modal } from "../common/Modal/Modal";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  name: string;
}

export const HeroEquipmentModal = ({ name, setShowModal }: Props) => {
  const { player } = usePanelInfo();
  if (!player) return null;

  const { heroEquipment } = player;

  const heroEquipmentItem = heroEquipment.find(
    (heroEquipment) => heroEquipment.name === name
  );

  if (!heroEquipmentItem) return null;

  const {
    name: equipmentName,
    level,
    dps,
    hallMaxLevel,
    upgradeCost,
    maxLevel,
  } = heroEquipmentItem;

  const progressPercentageHeroes = (level / hallMaxLevel) * 100;

  return (
    <Modal setShowModal={setShowModal}>
      <div className="modal__container">
        <div className="modal__container-first">
          <h2>{equipmentName}</h2>
          <h3>Level:</h3>
          <div className="profile-content__summary-containerArmy__progressbar">
            <div
              className="profile-content__summary-containerArmy__progressbar-progress"
              style={{ width: `${progressPercentageHeroes}%` }}
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
