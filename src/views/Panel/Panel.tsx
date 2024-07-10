import { usePanel } from "../../contexts/panel.context";
import { PanelContent } from "./PanelContent";
import { PanelNav } from "./PanelNav";

export const Panel = () => {
  const { panel } = usePanel();

  return panel ? (
    <div className="panel">
      <PanelNav />
      <PanelContent />
    </div>
  ) : null;
};
