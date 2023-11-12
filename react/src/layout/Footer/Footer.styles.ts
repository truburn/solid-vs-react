import { css, useTheme, SerializedStyles } from "@emotion/react";

export function useFooterStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.colors.standard.altContrast,
    color: theme.colors.standard.altMain,
    fontSize: "0.875rem",
    padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
    "& p": {
      margin: 0,
    },
  });

  return { root };
}
