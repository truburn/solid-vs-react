import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useErrorPageStyles() {
  const theme = useTheme();

  const stackLine = css({
    fontSize: "0.875rem",
    fontFamily: theme.fonts.default.name,
    fontWeight: theme.fonts.default.weight?.light,
    ...Mixins.spacing("margin", {
      vertical: theme.spacing.large,
      left: theme.spacing.wide * 2,
      right: theme.spacing.wide,
    }),
    "&:first-of-type": {
      ...Mixins.spacing("margin", { left: theme.spacing.wide }),
      fontSize: "1rem",
      fontWeight: theme.fonts.default.weight?.bold,
      color: theme.colors.primary.main,
    },
  });

  return { stackLine };
}
