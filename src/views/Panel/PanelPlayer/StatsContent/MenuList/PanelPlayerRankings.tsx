import { usePanelInfo } from "../../../../../contexts/panel.context";
import TrophyImage from "../../../../../../public/img/Rankings/Trofea/trophy.webp";

export const PanelPlayerRankings = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { trophies } = player;

  return (
    <div className="profile-content__rankings">
      <h2 className="profile-content__rankings-text">Trofea</h2>
      <div className="profile-content__rankings-container">
        <img
          className="profile-content__rankings-container__image"
          src={TrophyImage}
          alt="Trophy Image"
        />
        <p className="profile-content__rankings-container__text">{trophies}</p>
      </div>
    </div>
  );
};
