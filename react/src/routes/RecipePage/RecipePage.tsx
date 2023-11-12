import { PageHeader } from "@/library/PageHeader";
import { RecipeTools } from "@/library/RecipeTools";
import { useEffect, useMemo } from "react";
import { useAppContext } from "@/layout/AppProvider";
import { getDummyRecipes } from "@/dummyData";
import { RecipeSummary } from "@/library/RecipeSummary";
import { RecipeInfo } from "@/library/RecipeInfo";
import { useRecipePageStyles } from "@/routes/RecipePage";
import { Ingredients } from "@/library/Ingredients";
import { Steps } from "@/library/Steps";

export function RecipePage() {
  const classes = useRecipePageStyles();
  const { setShowList, setSidePanelContent } = useAppContext();

  useEffect(() => {
    setShowList(true);
  }, [setShowList]);

  const recipe = useMemo<Recipe>(() => {
    const tmpRecipe = getDummyRecipes();
    return tmpRecipe as Recipe;
  }, []);

  useEffect(() => {
    setSidePanelContent(
      <>
        <RecipeInfo recipe={recipe} />
        <RecipeSummary body={recipe.summary} />
      </>,
    );
  }, [recipe, setSidePanelContent]);

  return (
    <>
      <PageHeader title={recipe.name} />
      <RecipeTools tools={["add", "edit"]} id={recipe.recipeID} />
      <div css={classes.content}>
        <Ingredients ingredients={recipe.ingredients} />
        <div css={classes.divider} />
        <Steps steps={recipe.steps} />
      </div>
    </>
  );
}
