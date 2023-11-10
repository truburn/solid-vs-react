import { useState, ReactNode, useMemo } from "react";
import { AppContext, AppContextProps } from "@/layout/AppProvider";

export function AppProvider(props: { children: ReactNode }) {
  const [sidePanelContent, setSidePanelContent] = useState<any>(null);
  const [showList, setShowList] = useState<boolean>(false);

  const value = useMemo<AppContextProps>(
    () => ({
      sidePanelContent,
      setSidePanelContent,
      showList,
      setShowList,
    }),
    [sidePanelContent, setSidePanelContent, showList, setShowList],
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
