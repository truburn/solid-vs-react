import {
  IngredientsProps,
  useIngredientsStyles,
} from "@/components/Ingredients";

/** Display list of ingredients for a recipe */
export function Ingredients(props: IngredientsProps) {
  const classes = useIngredientsStyles();

  return <div css={classes.root}>Ingredients</div>;
}
