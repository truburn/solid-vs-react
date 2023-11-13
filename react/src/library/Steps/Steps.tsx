import { StepsProps, useStepsStyles } from "@/library/Steps";
import { SectionHeader } from "@/library/SectionHeader";
import { Scrollbar } from "@/library/Scrollbar";

export function Steps(props: StepsProps) {
  const { steps = [] } = props;
  const classes = useStepsStyles();

  return (
    <div css={classes.root}>
      <SectionHeader title="How to make it" />
      <div css={classes.content}>
        <Scrollbar>
          <ol css={classes.list}>
            {steps.map(({ body }, idx) => (
              <li key={`step-${idx + 1}`}>{body}</li>
            ))}
          </ol>
        </Scrollbar>
      </div>
    </div>
  );
}
