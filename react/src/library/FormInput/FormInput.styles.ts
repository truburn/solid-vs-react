import { css, useTheme } from "@emotion/react";

export function useFormInputStyles(multiline?: boolean) {
  const theme = useTheme();

  const root = css({
    fontFamily: theme.fonts.default.name,
    ...(multiline && { flex: 1 }),
  });

  return { root };
}
