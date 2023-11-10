import { createContext, useContext } from "react";

export interface AppContextProps {
  sidePanelContent: any;
  setSidePanelContent: React.Dispatch<React.SetStateAction<any>>;
  showList: boolean;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextProps | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside the AppProvider");
  }

  return context;
}
