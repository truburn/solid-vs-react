import { usePageStyles } from "@/layout/Page";

/** The main wrapper for each application page */
export function Page() {
  const classes = usePageStyles();

  return <div css={classes.root}>Page Wrapper</div>;
}
