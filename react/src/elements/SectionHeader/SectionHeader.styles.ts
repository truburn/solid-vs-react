import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useSectionHeaderStyles() {
  const theme = useTheme();

  const root = css({
    ...Mixins.spacing("margin", theme.spacing.medium),
    ...Mixins.spacing("padding", theme.spacing.medium),
    fontFamily: theme.fonts.heading.name,
    fontSize: "1.25rem",
    lineHeight: 1,
    color: theme.colors.primary.main,
    borderStyle: "solid",
    ...Mixins.borderWidths(0),
    "h2&": {
      ...Mixins.borderWidths({ bottom: theme.border.width }),
    },
    "h3&": {
      fontSize: "1rem",
      color: theme.colors.secondary.main,
    },
    "h4&": {
      fontSize: "1.25rem",
      fontFamily: theme.fonts.body.name,
      fontWeight: "bold",
      color: theme.colors.primary.altMain,
    },
    "h5&": {
      fontSize: "1.125rem",
      fontFamily: theme.fonts.body.name,
      color: theme.colors.secondary.altMain,
    },
    "h6&": {
      fontSize: "1rem",
      fontFamily: theme.fonts.default.name,
      color: theme.colors.standard.altMain,
      width: "fit-content",
      ...Mixins.spacing("margin", {
        all: theme.spacing.medium,
        left: theme.spacing.large,
      }),
      ...Mixins.spacing("padding", {
        horizontal: theme.spacing.small,
        bottom: theme.spacing.thin,
        top: theme.spacing.medium,
      }),
    },
  });

  return { root };
}
