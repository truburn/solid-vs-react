import { useContentStyles } from "@/layout/Content";

/** The page content wrapper. This will usually hold the contents of the <Outlet /> */
export function Content() {
  const classes = useContentStyles();

  return <div css={classes.root}>Content/Outlet Wrapper</div>;
}
