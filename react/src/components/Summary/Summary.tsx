import { SummaryProps, useSummaryStyles } from "@/components/Summary";

/** Render the recipe's summary inside a scrollbar container with an optional header */
export function Summary(props: SummaryProps) {
  const classes = useSummaryStyles();

  return <div css={classes.root}>Summary</div>;
}
