import { css, useTheme } from "@emotion/react";

export function useRecipePageStyles() {
  const theme = useTheme();

  const content = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexGrow: 1,
    overflow: "hidden",
  });

  const divider = css({
    width: 0,
    borderStyle: "solid",
    borderColor: theme.colors.primary.altContrast,
    borderWidth: 0,
    borderRightWidth: theme.border.width,
    margin: theme.spacing.thin,
  });

  return { content, divider };
}
