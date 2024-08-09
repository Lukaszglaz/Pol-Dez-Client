/* eslint-disable react-hooks/rules-of-hooks */

import { PanelClanHistory } from "./MenuList/PanelClanHistory";
import { PanelClanMembers } from "./MenuList/PanelClanMembers";
import { PanelClanRankings } from "./MenuList/PanelClanRankings";
import { PanelClanSummary } from "./MenuList/PanelClanSummary";
import { PanelClanWars } from "./MenuList/PanelClanWars";

interface Props {
  activeTab: string;
}

export const PanelClanStatsContent = ({ activeTab }: Props) => {
  const getContent = () => {
    switch (activeTab) {
      case "Summary":
        return <PanelClanSummary />;

      case "Members":
        return <PanelClanMembers />;

      case "History":
        return <PanelClanHistory />;

      case "Wars":
        return <PanelClanWars />;

      case "Rankings":
        return <PanelClanRankings />;

      default:
        break;
    }
  };
  return <div className="profile-content">{getContent()}</div>;
};
