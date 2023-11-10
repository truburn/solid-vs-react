import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";

export function RecipeList() {
  useClearSides();

  return (
    <>
      <PageHeader title="My Favorite Recipes" />
      <div>A list of recipes</div>
    </>
  );
}
