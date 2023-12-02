import { PageHeaderProps, usePageHeaderStyles } from "@/elements/PageHeader";
import uniqueId from "lodash/uniqueId";

/** Top level header for site pages. Stylized H1 element */
export function PageHeader(_props: PageHeaderProps) {
  const { children, title, id, className, style, ...props} = _props;
  const classes = usePageHeaderStyles(props);
  const elID = id ?? uniqueId("page-header-");

  return (
    <h1 id={elID} css={classes.root} className={className} style={style}>
      {children ?? title}
    </h1>
  );
}
