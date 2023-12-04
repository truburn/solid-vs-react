import { css, useTheme } from "@emotion/react";

export function useDateTimeStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
