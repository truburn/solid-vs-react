import { usePageHeaderStyles, PageHeaderProps } from "@/library/PageHeader";

export function PageHeader(props: PageHeaderProps) {
  const classes = usePageHeaderStyles();

  return <h1 css={classes.root}>{props.title}</h1>;
}
