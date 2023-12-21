import { ContentProps, useContentStyles } from "@/layout/Content";
import { PageHeader } from "@/elements/PageHeader";

/**
 * The page content wrapper. This will hold the title and main content.
 */
export function Content(props: ContentProps) {
  const { title, children } = props;
  const classes = useContentStyles();

  return (
    <div css={classes.root}>
      <PageHeader title={title} />
      <div css={classes.content}>{children}</div>
    </div>
  );
}
