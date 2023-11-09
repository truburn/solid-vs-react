import { useState, ReactNode, useMemo } from "react";
import { AppContext, AppContextProps } from "@/layout/AppProvider";

export function AppProvider(props: { children: ReactNode }) {
  const [sidePanelContent, setSidePanelContent] =
    useState<ReactNode>("Side Panel Content");
  const [searchString, setSearchString] = useState<string>("Search String");

  const value = useMemo<AppContextProps>(
    () => ({
      sidePanelContent,
      setSidePanelContent,
      searchString,
      setSearchString,
    }),
    [sidePanelContent, setSidePanelContent, searchString, setSearchString],
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
