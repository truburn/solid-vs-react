import { css, useTheme } from "@emotion/react";

export function useMeasurementInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
