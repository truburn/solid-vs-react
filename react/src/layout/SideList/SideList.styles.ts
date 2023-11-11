import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useSideListStyles() {
  const theme = useTheme();

  const root: SerializedStyles = css({
    display: "flex",
    flexDirection: "column",
    border: "dotted 1px",
  });

  const logo: SerializedStyles = css({
    padding: `${theme.spacing.large}px ${theme.spacing.wide}px`,
  });

  return { root, logo };
}
