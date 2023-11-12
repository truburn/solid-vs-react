import {
  RecipeSummaryProps,
  useRecipeSummaryStyles,
} from "@/library/RecipeSummary";
import { Scrollbar } from "@/library/Scrollbar";
import { SectionHeader } from "@/library/SectionHeader";

export function RecipeSummary(props: RecipeSummaryProps) {
  const { body } = props;
  const classes = useRecipeSummaryStyles();

  return (
    <>
      <SectionHeader title="Summary" />
      <div css={classes.root}>
        <Scrollbar>
          <p css={classes.body}>{body}</p>
        </Scrollbar>
      </div>
    </>
  );
}
