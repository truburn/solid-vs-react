import { ReactNode } from "react";
import { AppContext } from "@/layout/App";

export function AppProvider(props: { children: ReactNode }) {
  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
}
