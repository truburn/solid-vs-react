import { useNavigationStyles } from "@/layout/SideList";

export function Navigation() {
  const classes = useNavigationStyles();

  return <div css={classes.root}>Recipe List</div>;
}
