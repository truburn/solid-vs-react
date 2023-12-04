import { css, useTheme } from "@emotion/react";

export function useRecipeListStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
