/* eslint-disable react-hooks/rules-of-hooks */

import { PanelPlayerAchievements } from "./MenuList/PanelPlayerAchievements";
import { PanelPlayerArmy } from "./MenuList/PanelPlayerArmy/PanelPlayerArmy";
import { PanelPlayerRankings } from "./MenuList/PanelPlayerRankings";
import { PanelPlayerSummary } from "./MenuList/PanelPlayerSummary";

interface Props {
  activeTab: string;
}

export const PanelPlayerStatsContent = ({ activeTab }: Props) => {
  const getContent = () => {
    switch (activeTab) {
      case "Summary":
        return <PanelPlayerSummary />;

      case "Rankings":
        return <PanelPlayerRankings />;

      case "Army":
        return <PanelPlayerArmy />;

      case "Achievements":
        return <PanelPlayerAchievements />;

      default:
        break;
    }
  };
  return <div className="profile-content">{getContent()}</div>;
};
