import { RecipeListProps, useRecipeListStyles } from "@/components/RecipeList";

/** Display a list of recipes */
export function RecipeList(props: RecipeListProps) {
  const classes = useRecipeListStyles();

  return <div css={classes.root}>Recipe List</div>;
}
