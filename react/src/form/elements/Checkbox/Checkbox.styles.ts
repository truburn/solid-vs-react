import { css, useTheme } from "@emotion/react";

export function useCheckboxStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
