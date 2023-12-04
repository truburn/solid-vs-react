import {
  NumberInputProps,
  useNumberInputStyles,
} from "@/form/elements/NumberInput";

/** Form number input */
export function NumberInput(props: NumberInputProps) {
  const classes = useNumberInputStyles();

  return <div css={classes.root}>Number Input</div>;
}
