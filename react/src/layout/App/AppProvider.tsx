import { ReactNode, useState } from "react";
import { AppContext } from "@/layout/App";

export function AppProvider(props: { children: ReactNode }) {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [list, setRecipeList] = useState<Recipe[]>([]);

  return (
    <AppContext.Provider
      value={{ recipe, selectRecipe: setRecipe, list, setRecipeList }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
