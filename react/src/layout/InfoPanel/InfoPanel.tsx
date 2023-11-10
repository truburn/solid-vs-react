import { useInfoPanelStyles } from "@/layout/InfoPanel";
import { useAppContext } from "@/layout/AppProvider";

export function InfoPanel() {
  const { sidePanelContent } = useAppContext();
  const classes = useInfoPanelStyles();

  if (!sidePanelContent) return null;
  return <div css={classes.root}>Info Panel</div>;
}
