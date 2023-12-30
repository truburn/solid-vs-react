import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useToolButtonsStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    ...Mixins.spacing("padding", theme.spacing.small),
    ...Mixins.spacing("margin", { bottom: -theme.spacing.wide }),
  });

  const button = css({
    fontSize: 12,
    ...Mixins.spacing("margin", {
      horizontal: theme.spacing.small,
    }),
  });

  return { root, button };
}
