import { css, useTheme } from "@emotion/react";

export function useRecipeToolsStyles() {
  const theme = useTheme();

  const root = css({
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-end",
    padding: theme.spacing.small,
  });

  const link = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    textDecoration: "none",
    background: theme.colors.secondary.contrast,
    color: theme.colors.secondary.main,
    marginLeft: theme.spacing.medium,
    overflow: "hidden",
    width: 24,
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    border: "solid 1px",
    boxSizing: "border-box",
    opacity: 0.5,
    "&:hover": {
      width: "fit-content",
      opacity: 1,
    },
  });

  const linkIcon = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.colors.secondary.main,
    color: theme.colors.secondary.contrast,
    alignSelf: "stretch",
    height: 20,
    width: 20,
    minWidth: 20,
    padding: 1,
    borderRadius: 10,
    borderColor: theme.colors.secondary.main,
  });

  const linkLabel = css({
    fontSize: "0.875rem",
    whiteSpace: "nowrap",
    padding: "0 1rem 0 0.5rem",
  });

  return { root, link, linkIcon, linkLabel };
}
