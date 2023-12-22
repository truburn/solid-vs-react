import { AppContext } from "@/layout/App";
import { ReactNode, useState } from "react";
import { getRecipe } from "./RecipeSamples";

function AppProvider(props: { children: ReactNode }) {
  const [recipe, setRecipe] = useState(getRecipe());
  return (
    <AppContext.Provider value={{ recipe, selectRecipe: setRecipe }}>
      {props.children}
    </AppContext.Provider>
  );
}

export function withAppContext(Story: any) {
  return (
    <AppProvider>
      <Story />
    </AppProvider>
  );
}
