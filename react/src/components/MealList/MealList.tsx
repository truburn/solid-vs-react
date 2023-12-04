import { MealListProps, useMealListStyles } from "@/components/MealList";

/** List of meals or courses the recipe is recommended for as tokens */
export function MealList(props: MealListProps) {
  const classes = useMealListStyles();

  return <div css={classes.root}>Meal List</div>;
}
