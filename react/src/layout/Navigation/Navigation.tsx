import { useNavigationStyles } from "@/layout/Navigation";

export function Navigation() {
  const classes = useNavigationStyles();

  return <div css={classes.root}>Recipe List</div>;
}
