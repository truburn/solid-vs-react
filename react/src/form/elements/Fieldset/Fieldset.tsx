import { FieldsetProps, useFieldsetStyles } from "@/form/elements/Fieldset";

/** Form fieldset element for form groups */
export function Fieldset(props: FieldsetProps) {
  const classes = useFieldsetStyles();

  return <div css={classes.root}>Fieldset</div>;
}
