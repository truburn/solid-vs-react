import {
  ServingsInputProps,
  useServingsInputStyles,
} from "@/form/components/ServingsInput";

/** Form input for adding and editing recipe servings information */
export function ServingsInput(props: ServingsInputProps) {
  const classes = useServingsInputStyles();

  return <div css={classes.root}>Servings Input</div>;
}
