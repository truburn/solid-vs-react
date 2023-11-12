import { css, SerializedStyles, useTheme } from "@emotion/react";

export function usePageNotFoundStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.secondary.main,
    fontSize: "3rem",
    fontFamily: theme.fonts.body.name,
    textAlign: "center",
  });

  const icon = css({
    color: theme.colors.primary.main,
    fontSize: "20rem",
    margin: theme.spacing.wide,
  });

  const redirect = css({
    fontSize: "1.25rem",
    color: theme.colors.standard.main,
    "& a": {
      display: "block",
      margin: theme.spacing.large,
      fontSize: "1rem",
    },
  });

  return { root, icon, redirect };
}
