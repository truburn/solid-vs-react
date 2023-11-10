import { useMemo } from "react";
import { css, useTheme, SerializedStyles } from "@emotion/react";

export function useFooterStyles() {
  const theme = useTheme();

  const root = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      background: theme.colors.standard.altContrast,
      color: theme.colors.standard.altMain,
      fontSize: "0.875rem",
      padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
    });
  }, [theme]);

  return { root };
}