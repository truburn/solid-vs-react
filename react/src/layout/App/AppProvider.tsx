import { ReactNode, useState } from "react";
import { AppContext } from "@/layout/App";

export function AppProvider(props: { children: ReactNode }) {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  return (
    <AppContext.Provider value={{ recipe, selectRecipe: setRecipe }}>
      {props.children}
    </AppContext.Provider>
  );
}
