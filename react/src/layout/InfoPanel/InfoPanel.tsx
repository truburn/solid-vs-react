import { useInfoPanelStyles } from "@/layout/InfoPanel";

export function InfoPanel() {
  const classes = useInfoPanelStyles();

  return <div css={classes.root}>Info Panel</div>;
}
