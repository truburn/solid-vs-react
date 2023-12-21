import { PageHeaderProps, usePageHeaderStyles } from "@/elements/PageHeader";
import uniqueId from "lodash/uniqueId";

/** Top level header for site pages. Stylized H1 element */
export function PageHeader(props: PageHeaderProps) {
  const { children, title, id, className, style } = props;
  const classes = usePageHeaderStyles();
  const elID = id ?? uniqueId("page-header-");

  if (!title && !children) return null;

  return (
    <h1 id={elID} css={classes.root} className={className} style={style}>
      {children ?? title}
    </h1>
  );
}
