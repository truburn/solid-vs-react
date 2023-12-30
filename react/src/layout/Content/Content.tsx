import { ContentProps, useContentStyles } from "@/layout/Content";
import { PageHeader } from "@/elements/PageHeader";
import { ToolButtons } from "@/components/ToolButtons";

/**
 * The page content wrapper. This will hold the title and main content.
 */
export function Content(props: ContentProps) {
  const { title, children, tools } = props;
  const classes = useContentStyles();

  return (
    <div css={classes.root}>
      <ToolButtons tools={tools} />
      <PageHeader title={title} />
      <div css={classes.content}>{children}</div>
    </div>
  );
}
