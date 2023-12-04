import { css, useTheme } from "@emotion/react";

export function useNumberInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
