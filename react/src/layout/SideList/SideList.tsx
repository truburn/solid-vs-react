import { useSideListStyles } from "@/layout/SideList";
import { useAppContext } from "@/layout/AppProvider";
import { Scrollbar } from "@/library/Scrollbar";
import { RecipeCard } from "@/library/RecipeCard";
import { getDummyRecipes } from "@/dummyData";
import { useMemo } from "react";

export function SideList() {
  const { showList } = useAppContext();
  const classes = useSideListStyles();

  const recipes = useMemo<Recipe[]>(() => {
    if (!showList) return [];

    const list = getDummyRecipes(50);
    return list as Recipe[];
  }, [showList]);

  if (!showList) return null;

  return (
    <Scrollbar>
      <ul css={classes.root}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipeID} recipe={recipe} compact />
        ))}
      </ul>
    </Scrollbar>
  );
}
