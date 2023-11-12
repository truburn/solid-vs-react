/* eslint-disable react/no-unescaped-entities */
import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";
// import { useLoaderData } from "react-router-dom";
import { RecipeTools } from "@/library/RecipeTools";
import { getDummyRecipes } from "@/dummyData";
import { useMemo } from "react";
import { RecipeCard } from "@/library/RecipeCard";
import { useRecipeListStyles } from "@/routes/RecipeList";

export function RecipeList() {
  useClearSides();
  const classes = useRecipeListStyles();
  // const recipes = useLoaderData() as any[];

  const recipes = useMemo<Recipe[]>(() => {
    const list = getDummyRecipes(50);
    return list as Recipe[];
  }, []);

  return (
    <>
      <PageHeader title="My Favorite Recipes" />
      <RecipeTools tools={["add"]} />
      <Scrollbar>
        <ul css={classes.root}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.recipeID} recipe={recipe} />
          ))}
        </ul>
      </Scrollbar>
    </>
  );
}
