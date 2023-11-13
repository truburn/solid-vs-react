import { css, useTheme } from "@emotion/react";

export function useRecipeCardStyles(isCompact?: boolean) {
  const theme = useTheme();

  const root = css({
    margin: 0,
    padding: 0,
  });

  const card = css({
    display: "flex",
    flexDirection: "column",
    width: isCompact ? "auto" : 375,
    borderStyle: "solid",
    borderColor: theme.colors.secondary.main,
    borderWidth: theme.border.width,
    borderRadius: theme.border.radius,
    textDecoration: "none",
    fontWeight: "normal",
    margin: theme.spacing.medium,
    overflow: "hidden",
    background: theme.colors.secondary.contrast,
    color: theme.colors.standard.main,
    "&:hover": {
      borderColor: theme.colors.primary.main,
      color: theme.colors.primary.main,
      background: theme.colors.primary.contrast,
    },
  });

  const meta = css({
    display: "flex",
    flexDirection: isCompact ? "column" : "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& p": {
      margin: theme.spacing.small,
      fontFamily: theme.fonts.default.name,
      fontWeight: theme.fonts.default.weight?.light,
      fontSize: "0.75rem",
    },
  });

  const title = css({
    margin: 0,
    background: isCompact
      ? theme.colors.secondary.altContrast
      : theme.colors.secondary.main,
    color: isCompact
      ? theme.colors.secondary.altMain
      : theme.colors.secondary.contrast,
    fontFamily: theme.fonts.default.name,
    fontWeight: theme.fonts.default.weight?.bold,
    fontSize: isCompact ? "0.875rem" : "1.125rem",
    whiteSpace: isCompact ? "normal" : "nowrap",
    overflow: "clip",
    textOverflow: "ellipsis",
    padding: theme.spacing.medium,
    "a:hover &": {
      background: isCompact
        ? theme.colors.primary.altContrast
        : theme.colors.primary.main,
      color: isCompact
        ? theme.colors.primary.altMain
        : theme.colors.primary.contrast,
    },
  });

  const summary = css({
    flex: 1,
    margin: 0,
    padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
    fontSize: "0.875rem",
  });

  const info = css({
    display: "flex",
    flexDirection: isCompact ? "column" : "row",
    alignItems: isCompact ? "stretch" : "center",
    justifyContent: "space-between",
    padding: theme.spacing.medium,
  });

  const cuisine = css({
    margin: isCompact ? `${theme.spacing.thin}px 0` : 0,
    fontSize: "0.875rem",
  });

  const meals = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: isCompact ? "flex-start" : "flex-end",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "& li": {
      display: "flex",
      alignItems: "center",
      margin: theme.spacing.thin,
      padding: "0 0.5rem",
      fontSize: "0.75rem",
      fontWeight: theme.fonts.default.weight?.light,
      background: theme.colors.secondary.altContrast,
      color: theme.colors.secondary.altMain,
      whiteSpace: "nowrap",
      height: "1rem",
      borderRadius: "0.5rem",
      "a:hover &": {
        background: theme.colors.primary.altContrast,
        color: theme.colors.primary.altMain,
      },
    },
  });

  return { root, card, meta, title, summary, info, cuisine, meals };
}
