import { css, SerializedStyles, useTheme } from "@emotion/react";

export function usePageStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  });

  const content = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  });

  const page = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  });

  const outlet = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    overflow: "hidden",
    width: 840,
    minWidth: 640,
    margin: `${theme.spacing.large}px 0px`,
    borderStyle: "solid",
    borderWidth: theme.border.width,
    borderRadius: theme.border.radius,
    borderColor: theme.colors.panel.border,
    background: theme.colors.panel.background,
    position: "relative",
  });

  const sidePanel = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    maxWidth: 350,
    margin: `${theme.spacing.large}px 0px`,
    overflow: "hidden",
  });

  return { root, content, page, outlet, sidePanel };
}
