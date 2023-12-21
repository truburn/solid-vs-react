import { css, useTheme } from "@emotion/react";

export function useFooterStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.colors.standard.altContrast,
    color: theme.colors.standard.main,
    fontSize: "0.875rem",
    padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
    "& p": {
      margin: 0,
    },
  });

  const icon = css({
    marginRight: theme.spacing.small,
  });

  return { root, icon };
}
