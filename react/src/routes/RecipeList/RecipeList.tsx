/* eslint-disable react/no-unescaped-entities */
import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";
// import { useLoaderData } from "react-router-dom";
import { RecipeTools } from "@/library/RecipeTools";
import { getDummyRecipes } from "@/dummyData";
import { useMemo } from "react";

export function RecipeList() {
  useClearSides();
  // const recipes = useLoaderData() as any[];

  const recipes = useMemo<Recipe[]>(() => {
    const list = getDummyRecipes(20);
    console.log('recipes: ', list);
    return list as Recipe[];
  }, []);

  return (
    <>
      <PageHeader title="My Favorite Recipes" />
      <RecipeTools tools={["add"]} />
      <Scrollbar>
        {recipes.map(({ recipeID, name }) => (
          <p key={recipeID}>{name}</p>
        ))}
      </Scrollbar>
    </>
  );
}
