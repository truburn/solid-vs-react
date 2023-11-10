import { useClearSides } from "@/utils/common.hooks";
import { PageHeader } from "@/library/PageHeader";
import { Scrollbar } from "@/library/Scrollbar";

export function RecipeList() {
  useClearSides();

  return (
    <>
      <PageHeader title="My Favorite Recipes" />
      <Scrollbar>A list of recipes</Scrollbar>
    </>
  );
}
