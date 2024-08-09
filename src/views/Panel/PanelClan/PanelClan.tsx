import { PanelClanBaner } from "./StatsContent/PanelClanBaner";
import { PanelClanStats } from "./StatsContent/PanelClanStats";

export const PanelClan = () => {
  return (
    <main className="panel__content">
      <PanelClanBaner />
      <PanelClanStats />
    </main>
  );
};
