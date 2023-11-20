import {
  ServingsInputProps,
  useServingsInputStyles,
} from "@/library/ServingsInput";

export function ServingsInput(props: ServingsInputProps) {
  const { updateField } = props;
  const classes = useServingsInputStyles();

  const readonly = !updateField;

  return <div css={classes.root}>Servings Input{readonly && "-readonly"}</div>;
}
