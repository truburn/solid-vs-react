import { css, useTheme } from "@emotion/react";

export function useSummaryStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
