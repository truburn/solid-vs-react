import { css, useTheme } from "@emotion/react";

export function useSectionHeaderStyles() {
  const theme = useTheme();

  const root = css({
    margin: theme.spacing.medium,
    padding: theme.spacing.medium,
    fontFamily: theme.fonts.heading.name,
    fontSize: "1.25rem",
    lineHeight: 1,
    color: theme.colors.primary.main,
    borderStyle: "solid",
    borderWidth: 0,
    "h2&": {
      borderBottomWidth: theme.border.width,
    },
    "h3&": {
      fontSize: "1rem",
      color: theme.colors.secondary.main,
    },
    "h4&": {
      fontSize: "1.25rem",
      fontFamily: theme.fonts.body.name,
      fontWeight: "bold",
      color: theme.colors.primary.altMain,
    },
    "h5&": {
      fontSize: "1.125rem",
      fontFamily: theme.fonts.body.name,
      color: theme.colors.secondary.altMain,
    },
    "h6&": {
      fontSize: "1rem",
      fontFamily: theme.fonts.default.name,
      color: theme.colors.standard.altMain,
      width: "fit-content",
      borderBottomWidth: theme.border.width,
      paddingBottom: theme.spacing.thin,
      paddingLeft: theme.spacing.small,
      paddingRight: theme.spacing.small,
      marginLeft: theme.spacing.large,
    },
  });

  return { root };
}
