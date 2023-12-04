import {
  MeasurementProps,
  useMeasurementStyles,
} from "@/components/Measurement";

/** Standardized and styled measurement display */
export function Measurement(props: MeasurementProps) {
  const classes = useMeasurementStyles();

  return <div css={classes.root}>Measurement</div>;
}
