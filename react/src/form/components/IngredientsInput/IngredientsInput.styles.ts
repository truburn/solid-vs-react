import { css, useTheme } from "@emotion/react";

export function useIngredientsInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
