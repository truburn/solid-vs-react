import { css, useTheme } from "@emotion/react";

export function useToolButtonsStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
