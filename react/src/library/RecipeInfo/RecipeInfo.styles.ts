import { css, useTheme } from "@emotion/react";

export function useRecipeInfoStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    fontSize: "0.85rem",
    marginBottom: theme.spacing.medium,
  });

  const info = css({
    margin: `${theme.spacing.thin}px ${theme.spacing.large}px`,
    paddingLeft: theme.spacing.large,
  });

  const label = css({
    margin: `${theme.spacing.thin}px 0`,
    marginLeft: -theme.spacing.large,
    display: "block",
    fontWeight: theme.fonts.default.weight?.bold,
  });

  const meal = css({
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    fontFamily: theme.fonts.body.name,
    "& li": {
      margin: 0,
      padding: 0,
      marginRight: theme.spacing.small,
      "&:after": {
        content: `","`,
      },
      "&:last-of-type": {
        "&:after": {
          content: `""`,
        },
      },
    },
  });

  return { root, info, label, meal };
}
