import { css, useTheme } from "@emotion/react";

export function useStepsInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
