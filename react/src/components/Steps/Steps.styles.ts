import { css, useTheme } from "@emotion/react";

export function useStepsStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
