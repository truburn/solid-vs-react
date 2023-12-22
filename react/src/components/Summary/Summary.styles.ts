import { css, useTheme } from "@emotion/react";

export function useSummaryStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  });

  const body = css({
    margin: `${theme.spacing.medium}px ${theme.spacing.large}px`,
    fontSize: "0.875rem",
  });

  return { root, body };
}
