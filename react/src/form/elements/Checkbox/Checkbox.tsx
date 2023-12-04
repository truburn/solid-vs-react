import { CheckboxProps, useCheckboxStyles } from "@/form/elements/Checkbox";

/** Form checkbox element */
export function Checkbox(props: CheckboxProps) {
  const classes = useCheckboxStyles();

  return <div css={classes.root}>Checkbox</div>;
}
