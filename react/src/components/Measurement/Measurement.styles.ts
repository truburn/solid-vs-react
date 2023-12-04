import { css, useTheme } from "@emotion/react";

export function useMeasurementStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
