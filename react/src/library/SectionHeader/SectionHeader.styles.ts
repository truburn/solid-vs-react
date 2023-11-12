import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useSectionHeaderStyles() {
  const theme = useTheme();

  const root = css({
    margin: theme.spacing.medium,
    padding: theme.spacing.medium,
    fontFamily: theme.fonts.heading.name,
    fontSize: "1rem",
    lineHeight: 1,
    color: theme.colors.primary.main,
    borderStyle: "solid",
    borderWidth: 0,
    borderBottomWidth: theme.border.width,
  });

  return { root };
}
