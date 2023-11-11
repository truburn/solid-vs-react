/* eslint-disable react/no-unescaped-entities */
import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";
import { useLoaderData } from "react-router-dom";

export function RecipeList() {
  useClearSides();
  const recipes = useLoaderData() as any[];

  return (
    <>
      <PageHeader title="My Favorite Recipes" />
      <Scrollbar>
        {recipes.map(({ recipeID, name }) => (
          <p key={recipeID}>{name}</p>
        ))}
      </Scrollbar>
    </>
  );
}
