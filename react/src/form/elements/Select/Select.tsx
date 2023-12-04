import { SelectProps, useSelectStyles } from "@/form/elements/Select";

/** Form select menu */
export function Select(props: SelectProps) {
  const classes = useSelectStyles();

  return <div css={classes.root}>Select Menu</div>;
}
