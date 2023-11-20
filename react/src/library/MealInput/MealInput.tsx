import { MealInputProps, useMealInputStyles } from "@/library/MealInput";

export function MealInput(props: MealInputProps) {
  const { updateField } = props;
  const classes = useMealInputStyles();

  const readonly = !updateField;

  return <div css={classes.root}>Meal Input{readonly && "-readonly"}</div>;
}
