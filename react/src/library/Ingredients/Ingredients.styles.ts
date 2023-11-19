import { css, useTheme } from "@emotion/react";

export function useIngredientsStyles(noTitle?: boolean) {
  const theme = useTheme();

  const root = css({
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  });

  const content = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
  });

  const list = css({
    flex: 1,
    margin: noTitle ? 0 : theme.spacing.medium,
    paddingLeft: 0,
    listStyle: "none",
    "& li": {
      margin: 0,
      padding: `${theme.spacing.medium}px ${theme.spacing.small}px`,
      fontSize: "0.75rem",
      lineHeight: 1,
      borderStyle: "solid",
      borderColor: theme.colors.primary.altContrast,
      borderWidth: 0,
      borderBottomWidth: 1,
      "&:last-of-type": {
        borderWidth: 0,
      },
    },
  });

  return { root, content, list };
}
