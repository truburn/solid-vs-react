import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useRecipeCardStyles() {
  const theme = useTheme();

  const root: SerializedStyles = css({
    display: "flex",
    flexDirection: "column",
    width: 375,
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
    },
  });

  const meta: SerializedStyles = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& p": {
      margin: theme.spacing.small,
      fontFamily: theme.fonts.default.name,
      fontWeight: theme.fonts.default.weight?.light,
      fontSize: "0.75rem",
    },
  });

  const title: SerializedStyles = css({
    margin: 0,
    background: theme.colors.secondary.main,
    color: theme.colors.secondary.contrast,
    fontFamily: theme.fonts.default.name,
    fontWeight: theme.fonts.default.weight?.bold,
    fontSize: "1.125rem",
    whiteSpace: "nowrap",
    overflow: "clip",
    textOverflow: "ellipsis",
    padding: theme.spacing.medium,
    "a:hover &": {
      background: theme.colors.primary.main,
    },
  });

  const summary: SerializedStyles = css({
    flex: 1,
    margin: 0,
    padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
    fontSize: "0.875rem",
  });

  const info: SerializedStyles = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing.medium,
  });

  const cuisine: SerializedStyles = css({
    margin: 0,
    fontSize: "0.875rem",
  });

  const meals: SerializedStyles = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-end",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "& li": {
      display: "flex",
      alignItems: "center",
      margin: `0 ${theme.spacing.thin}px`,
      padding: "0 0.5rem",
      fontSize: "0.75rem",
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

  return { root, meta, title, summary, info, cuisine, meals };
}
