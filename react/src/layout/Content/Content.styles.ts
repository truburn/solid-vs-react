import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useContentStyles() {
  const theme = useTheme();

  const root = css({
    width: 840,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    ...Mixins.spacing("margin", { vertical: theme.spacing.large }),
    background: theme.colors.panel.background,
    borderStyle: "solid",
    ...Mixins.borderWidths(theme.border.width),
    borderRadius: theme.border.radius,
    borderColor: theme.border.color,
  });

  const content = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  });

  return { root, content };
}
