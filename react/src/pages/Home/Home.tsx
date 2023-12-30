import { RecipeList } from "@/components/RecipeList";
import { useAppContext } from "@/layout/App";
import { Content } from "@/layout/Content";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

/** Home page with a list of all recipes that can be filtered and sorted */
export function Home() {
  const list = useLoaderData() as Recipe[];
  const { setRecipeList } = useAppContext();

  useEffect(() => {
    setRecipeList(list);
  }, [list]);

  return (
    <Content title="My Favorite Recipes" tools={{ add: true }}>
      <RecipeList asTiles />
    </Content>
  );
}
