import { css, useTheme } from "@emotion/react";

export function useFieldsetStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
