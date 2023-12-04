import { css, useTheme } from "@emotion/react";

export function useServingSizeStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
