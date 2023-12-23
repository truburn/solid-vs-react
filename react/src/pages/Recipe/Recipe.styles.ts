import { css, useTheme } from "@emotion/react";

export function useRecipeStyles() {
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
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
  });

  const divider = css({
    width: 0,
    borderStyle: "solid",
    borderColor: theme.colors.primary.altContrast,
    borderWidth: 0,
    borderRightWidth: theme.border.width,
    margin: theme.spacing.small,
  });

  const sidePanel = css({
    width: 250,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    marginTop: theme.spacing.large,
    marginBottom: theme.spacing.large,
  });

  const info = css({
    margin: theme.spacing.large,
    marginTop: theme.spacing.thin,
    paddingLeft: theme.spacing.large,
  });

  const summary = css({
    margin: theme.spacing.large,
  });

  return { root, content, divider, sidePanel, info, summary };
}
