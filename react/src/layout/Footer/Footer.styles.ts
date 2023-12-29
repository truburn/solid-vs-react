import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useFooterStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.colors.standard.altContrast,
    color: theme.colors.standard.main,
    fontSize: "0.875rem",
    ...Mixins.spacing("padding", {
      vertical: theme.spacing.medium,
      horizontal: theme.spacing.large,
    }),
    "& p": {
      ...Mixins.spacing("margin", 0),
    },
  });

  const icon = css({
    ...Mixins.spacing("margin", { right: theme.spacing.small }),
  });

  return { root, icon };
}
