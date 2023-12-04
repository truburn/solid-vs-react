import { css, useTheme } from "@emotion/react";

export function useTextareaStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
