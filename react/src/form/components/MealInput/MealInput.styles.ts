import { css, useTheme } from "@emotion/react";

export function useMealInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
