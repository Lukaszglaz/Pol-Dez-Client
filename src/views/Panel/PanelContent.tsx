import { Route, Routes } from "react-router-dom";
import { PanelHome } from "./PanelHome/PanelHome";
import { PanelPlayer } from "./PanelPlayer/PanelPlayer";
import { PanelClan } from "./PanelClan/PanelClan";

export const PanelContent = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelHome />}></Route>
      <Route path="/player" element={<PanelPlayer />}></Route>
      <Route path="/clan" element={<PanelClan />}></Route>
    </Routes>
  );
};
