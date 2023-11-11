import { css, SerializedStyles, useTheme } from "@emotion/react";

export function usePageHeaderStyles() {
  const theme = useTheme();

  const root: SerializedStyles = css({
    maxWidth: "80%",
    margin: "1rem auto",
    padding: "0.75rem 2.25rem",
    background: theme.colors.secondary.altContrast,
    color: theme.colors.secondary.altMain,
    fontFamily: theme.fonts.heading.name,
    fontSize: "1.5rem",
    lineHeight: 1,
    transform: "rotate(-1deg)",
    borderStyle: "solid",
    borderWidth: 3,
    ...theme.border.drawn,
  });

  return { root };
}
