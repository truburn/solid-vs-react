import { NumberInputProps, useNumberInputStyles } from "@/form/NumberInput";

export function NumberInput(props: NumberInputProps) {
  const classes = useNumberInputStyles();

  return <div css={classes.root}>Number Input</div>
}
