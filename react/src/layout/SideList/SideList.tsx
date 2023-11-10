import { useSideListStyles } from "@/layout/SideList";

export function SideList() {
  const classes = useSideListStyles();

  return <div css={classes.root}>Side List</div>;
}
