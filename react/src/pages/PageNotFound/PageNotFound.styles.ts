import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function usePageNotFoundStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  const title = css({
    ...Mixins.spacing("margin", 0),
    color: theme.colors.secondary.main,
    fontFamily: theme.fonts.heading.name,
    textAlign: "center",
  });

  const icon = css({
    color: theme.colors.primary.main,
    fontSize: "20rem",
    ...Mixins.spacing("margin", theme.spacing.wide),
  });

  const redirect = css({
    textAlign: "center",
    fontSize: "1.25rem",
    "& a": {
      display: "block",
      ...Mixins.spacing("margin", theme.spacing.large),
      fontSize: "1rem",
    },
  });

  return { root, title, icon, redirect };
}
