import { Ingredients } from "@/components/Ingredients";
import { MealList } from "@/components/MealList";
import { RecipeList } from "@/components/RecipeList";
import { Steps } from "@/components/Steps";
import { SectionHeader } from "@/elements/SectionHeader";
import { useAppContext } from "@/layout/App";
import { Content } from "@/layout/Content";
import { useRecipeStyles } from "@/pages/Recipe";
import { DateTime } from "@/elements/DateTime";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

/** Component to render the recipe page */
export function Recipe() {
  const { list, selectRecipe, setRecipeList } = useAppContext();
  const classes = useRecipeStyles();
  const { recipe, recipeList }: any = useLoaderData();

  useEffect(() => {
    selectRecipe(recipe);
    return () => {
      selectRecipe({});
    };
  }, [recipe]);

  useEffect(() => {
    if (list?.length !== recipeList.length) {
      setRecipeList(recipeList);
    }
  }, [recipeList]);

  return (
    <div css={classes.root}>
      <div css={classes.sidePanel}>
        <RecipeList />
      </div>
      <Content title={recipe?.name}>
        <div css={classes.content}>
          <Ingredients />
          <hr css={classes.divider} />
          <Steps />
        </div>
      </Content>
      <div css={classes.sidePanel}>
        <SectionHeader title="Little Details" />
        <p css={classes.summary}>{recipe?.summary}</p>
        <SectionHeader title="Suggested Meal(s)" depth={3} />
        <MealList css={classes.info} />
        {recipe?.cuisine && (
          <>
            <SectionHeader title="Cuisine" depth={3} />
            <p css={classes.info}>{recipe.cuisine}</p>
          </>
        )}
        <SectionHeader title="Author" depth={3} />
        <p css={classes.info}>{recipe?.author}</p>
        <SectionHeader title="Created" depth={3} />
        <p css={classes.info}>
          <DateTime date={recipe?.created} />
        </p>
      </div>
    </div>
  );
}
