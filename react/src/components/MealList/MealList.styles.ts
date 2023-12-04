import { css, useTheme } from "@emotion/react";

export function useMealListStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
