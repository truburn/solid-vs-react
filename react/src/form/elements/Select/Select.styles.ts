import { css, useTheme } from "@emotion/react";

export function useSelectStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
