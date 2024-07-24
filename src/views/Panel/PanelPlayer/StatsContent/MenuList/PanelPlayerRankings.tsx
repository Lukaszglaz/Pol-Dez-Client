import { usePanelInfo } from "../../../../../contexts/panel.context";

export const PanelPlayerRankings = () => {
  const player = usePanelInfo().player;
  if (!player) return;

  const { trophies } = player;

  return (
    <div className="profile-content__rankings">
      <h2 className="profile-content__rankings-text">Trofea</h2>
      <div className="profile-content__rankings-container">
        <div className="information__trofea">
          <div className="information__trofea-container">
            <p>Trofea</p>

            <p className="information__trofea-container__text">{trophies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
