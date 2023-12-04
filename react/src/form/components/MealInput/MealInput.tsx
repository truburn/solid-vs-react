import {
  MealInputProps,
  useMealInputStyles,
} from "@/form/components/MealInput";

/** Form input for defining meals/courses the recipe is recommended for */
export function MealInput(props: MealInputProps) {
  const classes = useMealInputStyles();

  return <div css={classes.root}>Meal Input</div>;
}
