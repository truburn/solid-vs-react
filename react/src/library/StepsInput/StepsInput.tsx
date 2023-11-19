import { StepsInputProps, useStepsInputStyles } from "@/library/StepsInput";

export function StepsInput(props: StepsInputProps) {
  const classes = useStepsInputStyles();

  return <div css={classes.root}>Steps Input</div>;
}
