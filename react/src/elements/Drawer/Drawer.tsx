import { DrawerProps, useDrawerStyles } from "@/elements/Drawer";

/** Collapsible div element */
export function Drawer(props: DrawerProps) {
  const classes = useDrawerStyles();

  return <div css={classes.root}>Drawer</div>;
}
