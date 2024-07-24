import { PanelPlayerBuilderVillage } from "./MenuListSummaryVillage/PanelPlayerBuilderVillage";
import { PanelPlayerHomeVillage } from "./MenuListSummaryVillage/PanelPlayerHomeVillage";

export const PanelPlayerSummary = () => {
  return (
    <div className="profile-content__summary">
      <PanelPlayerHomeVillage />
      <PanelPlayerBuilderVillage />
    </div>
  );
};
