import { css, useTheme } from "@emotion/react";

export function useDrawerStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
