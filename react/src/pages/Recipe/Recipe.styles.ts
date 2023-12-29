import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useRecipeStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  });

  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
  });

  const divider = css({
    width: 0,
    borderStyle: "solid",
    borderColor: theme.colors.primary.altContrast,
    ...Mixins.borderWidths({ right: theme.border.width }),
    ...Mixins.spacing("margin", theme.spacing.small),
  });

  const sidePanel = css({
    width: 250,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    ...Mixins.spacing("margin", { vertical: theme.spacing.large }),
  });

  const info = css({
    ...Mixins.spacing("margin", {
      all: theme.spacing.large,
      top: theme.spacing.thin,
    }),
    ...Mixins.spacing("padding", { left: theme.spacing.large }),
  });

  const summary = css({
    ...Mixins.spacing("margin", theme.spacing.large),
  });

  return { root, content, divider, sidePanel, info, summary };
}
