import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface AppContextProps {
  recipe?: Recipe;
  selectRecipe: Dispatch<SetStateAction<any>>;
  list?: Recipe[];
  setRecipeList: Dispatch<SetStateAction<any>>;
}

export const AppContext = createContext<AppContextProps | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside the AppProvider");
  }

  return context;
}
