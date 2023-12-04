import { StepsProps, useStepsStyles } from "@/components/Steps";

/** Render the list of steps in a standard style */
export function Steps(props: StepsProps) {
  const classes = useStepsStyles();

  return <div css={classes.root}>Steps</div>;
}
