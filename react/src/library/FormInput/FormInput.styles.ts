import { css, useTheme } from "@emotion/react";

export function useFormInputStyles() {
  const theme = useTheme();

  const root = css({
    fontFamily: theme.fonts.default.name,
  });

  return { root };
}
