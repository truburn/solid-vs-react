import { useMemo, useState } from "react";
import { getDummyRecipes } from "@/dummyData";
import { INTIAL_RECIPE } from "@/routes/EditRecipe";
import isEqual from "lodash/isEqual";
import { useNavigate } from "react-router-dom";

export function usePrevRecipe(recipeID?: Recipe["recipeID"]) {
  const recipe = useMemo<Recipe | null>(() => {
    if (recipeID) {
      const dummyRecipe = getDummyRecipes() as Recipe;
      return dummyRecipe;
    }

    return null;
  }, [recipeID]);

  return recipe;
}

export function useEditRecipe(prevRecipe: Recipe | null) {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe>(prevRecipe ?? INTIAL_RECIPE);

  const disableButtons = useMemo<boolean>(() => {
    if (!prevRecipe) {
      return isEqual(recipe, INTIAL_RECIPE);
    }

    return isEqual(recipe, prevRecipe);
  }, [recipe, prevRecipe]);

  const updateRecipe = (newValue: Partial<Recipe>) => {
    setRecipe({
      ...recipe,
      ...newValue,
    });
  };

  const resetForm = () => {
    setRecipe(prevRecipe ?? INTIAL_RECIPE);
  };

  const cancelForm = () => {
    if (prevRecipe) navigate(`/recipe/${prevRecipe.recipeID}`);
    navigate(-1);
  };

  const fieldState = (key: keyof Recipe) => {
    const origVal: Recipe = prevRecipe ?? INTIAL_RECIPE;
    const fieldIsEqual = isEqual(origVal[key], recipe[key]);

    if (key === "name" && recipe.name.length === 0) return "error";

    return fieldIsEqual ? "idle" : "changed";
  };

  return {
    recipe,
    updateRecipe,
    disableButtons,
    resetForm,
    cancelForm,
    fieldState,
  };
}
