import {
  IngredientsInputProps,
  useIngredientsInputStyles,
} from "@/library/IngredientsInput";

export function IngredientsInput(props: IngredientsInputProps) {
  const classes = useIngredientsInputStyles();

  return <div css={classes.root}>Ingredients Input</div>;
}
