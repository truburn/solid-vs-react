import { css, useTheme } from "@emotion/react";

export function useIngredientsStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
