import {
  IngredientsInputProps,
  useIngredientsInputStyles,
} from "@/form/IngredientsInput";

export function IngredientsInput(props: IngredientsInputProps) {
  const { updateField } = props;
  const classes = useIngredientsInputStyles();

  const readonly = !updateField;

  return (
    <div css={classes.root}>Ingredients Input{readonly && "-readonly"}</div>
  );
}
