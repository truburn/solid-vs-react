import { AppContext } from "@/layout/App";
import { ReactNode, useState } from "react";
import recipes, { getRecipe } from "./RecipeSamples";

function AppProvider(props: { children: ReactNode }) {
  const [recipe, setRecipe] = useState(getRecipe());
  const [list, setRecipeList] = useState([
    ...recipes,
    ...recipes,
    ...recipes,
    ...recipes,
    ...recipes,
    ...recipes,
    ...recipes,
    ...recipes,
  ]);
  return (
    <AppContext.Provider
      value={{ recipe, selectRecipe: setRecipe, list, setRecipeList }}
    >
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
