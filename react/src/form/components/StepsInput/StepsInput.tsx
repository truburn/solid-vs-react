import {
  StepsInputProps,
  useStepsInputStyles,
} from "@/form/components/StepsInput";

/** Form input for adding and editing recipe steps */
export function StepsInput(props: StepsInputProps) {
  const classes = useStepsInputStyles();

  return <div css={classes.root}>Steps Input</div>;
}
