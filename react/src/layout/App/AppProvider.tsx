import { useAppStyles } from "@/layout/App";

/** Application level provider element for the app context */
export function AppProvider() {
  const classes = useAppStyles();

  return <div css={classes.root}>App Provider Element</div>;
}
