import { createContext, useContext, ReactNode } from "react";

export interface AppContextProps {
  sidePanelContent: ReactNode;
  setSidePanelContent: React.Dispatch<React.SetStateAction<ReactNode>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}
export const AppContext = createContext<AppContextProps | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside the AppProvider");
  }

  return context;
}
