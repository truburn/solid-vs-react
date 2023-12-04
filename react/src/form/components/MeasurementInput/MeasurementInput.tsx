import {
  MeasurementInputProps,
  useMeasurementInputStyles,
} from "@/form/components/MeasurementInput";

/** Form input for measurement amount and unit for ingredients and serving size */
export function MeasurementInput(props: MeasurementInputProps) {
  const classes = useMeasurementInputStyles();

  return <div css={classes.root}>Measurement Input</div>;
}
