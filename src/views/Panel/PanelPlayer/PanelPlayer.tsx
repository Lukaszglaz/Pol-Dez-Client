import { PanelPlayerBaner } from "./StatsContent/PanelPlayerBaner";
import { PanelPlayerStats } from "./StatsContent/PanelPlayerStats";

export const PanelPlayer = () => {
  return (
    <main className="panel__content">
      <PanelPlayerBaner />
      <PanelPlayerStats />
    </main>
  );
};
