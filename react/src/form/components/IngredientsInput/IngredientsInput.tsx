import {
  IngredientsInputProps,
  useIngredientsInputStyles,
} from "@/form/components/IngredientsInput";

/** Form input for adding and editing ingredients for a recipe */
export function IngredientsInput(props: IngredientsInputProps) {
  const classes = useIngredientsInputStyles();

  return <div css={classes.root}>Ingredients Input</div>;
}
