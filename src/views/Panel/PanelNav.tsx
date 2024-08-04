import { NavLink } from "react-router-dom";
import { usePanelInfo } from "../../contexts/panel.context";

export const PanelNav = () => {
  const clan = usePanelInfo().clan;
  return (
    <aside className="panel__aside">
      <nav className="panel__nav">
        <ul className="panel__nav-list">
          <li className="panel__nav-item">
            <NavLink to="/panel" className="panel__nav-link">
              Panel
            </NavLink>
          </li>
          <li className="panel__nav-item">
            <NavLink to="/panel/player" className="panel__nav-link">
              Player
            </NavLink>
          </li>

          {clan ? (
            <li className="panel__nav-item">
              <NavLink to="/panel/clan" className="panel__nav-link">
                Clan
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </aside>
  );
};
