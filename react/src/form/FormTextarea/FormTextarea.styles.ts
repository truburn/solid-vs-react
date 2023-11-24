import { css, useTheme } from "@emotion/react";

export function useFormTextareaStyles() {
  const theme = useTheme();

  const root = css({
    marginBottom: theme.spacing.large,
    resize: "none",
    height: theme.baseSize * 17,
    boxSizing: "content-box",
  });

  return { root };
}
