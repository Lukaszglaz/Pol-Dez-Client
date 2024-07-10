/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { callApi } from "../utils/api";
import { PanelResponse } from "../types";

interface Props {
  children: ReactNode;
}

interface PanelContextValue {
  panel: PanelResponse | null;
  setPanel: Dispatch<SetStateAction<PanelResponse | null>>;
}

const PanelContext = createContext<PanelContextValue>(null!);

export const usePanel = () => useContext(PanelContext);

export const usePanelInfo = () => {
  const { panel } = useContext(PanelContext);

  return panel as PanelResponse;
};

export const PanelProvider = ({ children }: Props) => {
  const [panel, setPanel] = useState<PanelResponse | null>(null);

  useEffect(() => {
    (async () => {
      const response = await callApi<PanelResponse>("panel");

      if (response.status) {
        setPanel(response.results);
      }
    })();
  }, []);

  return (
    <PanelContext.Provider
      value={{
        panel,
        setPanel,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};
