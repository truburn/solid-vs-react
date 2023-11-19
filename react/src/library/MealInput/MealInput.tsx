import { MealInputProps, useMealInputStyles } from "@/library/MealInput";

export function MealInput(props: MealInputProps) {
  const classes = useMealInputStyles();

  return <div css={classes.root}>Meal Input</div>;
}
