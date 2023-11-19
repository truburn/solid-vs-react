import {
  ServingsInputProps,
  useServingsInputStyles,
} from "@/library/ServingsInput";

export function ServingsInput(props: ServingsInputProps) {
  const classes = useServingsInputStyles();

  return <div css={classes.root}>Servings Input</div>;
}
