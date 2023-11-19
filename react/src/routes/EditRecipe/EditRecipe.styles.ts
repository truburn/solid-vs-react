import { css, useTheme } from "@emotion/react";
import { colorOpacity } from "@/utils";

export function useEditRecipeStyles() {
  const theme = useTheme();

  const actions = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: theme.spacing.medium,
    background: colorOpacity(theme.colors.standard.altContrast, 0.5),
    "& button": {
      margin: `${theme.spacing.small}px ${theme.spacing.medium}px`,
    },
  });

  return { actions };
}