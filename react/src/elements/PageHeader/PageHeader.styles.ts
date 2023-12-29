import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function usePageHeaderStyles() {
  const theme = useTheme();
  const colorGroup = theme.colors.secondary;

  const root = css({
    width: "fit-content",
    maxWidth: "65%",
    ...Mixins.spacing("margin", { vertical: "1rem", horizontal: "auto" }),
    ...Mixins.spacing("padding", {
      vertical: "0.75rem",
      horizontal: "2.25rem",
    }),
    fontFamily: theme.fonts.heading.name,
    fontSize: "1.5rem",
    background: colorGroup.altContrast,
    color: colorGroup.altMain,
    lineHeight: 1,
    transform: "rotate(-2deg)",
    borderStyle: "solid",
    ...Mixins.borderWidths(3),
    textAlign: "center",
    ...theme.border.drawn,
  });

  return { root };
}
