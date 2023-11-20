import { StepsInputProps, useStepsInputStyles } from "@/library/StepsInput";

export function StepsInput(props: StepsInputProps) {
  const { updateField } = props;
  const classes = useStepsInputStyles();
  const readonly = !updateField;

  return <div css={classes.root}>Steps Input{readonly && "-readonly"}</div>;
}
