import { SidePanelProps, useSidePanelStyles } from "@/layout/SidePanel";

/** Collapsible side panels for the app layout */
export function SidePanel(props: SidePanelProps) {
  const classes = useSidePanelStyles();

  return <div css={classes.root}>Side Panel</div>;
}
