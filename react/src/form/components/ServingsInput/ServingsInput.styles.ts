import { css, useTheme } from "@emotion/react";

export function useServingsInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
