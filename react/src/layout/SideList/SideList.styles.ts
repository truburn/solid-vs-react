import { useMemo } from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useSideListStyles() {
  const theme = useTheme();

  const root = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      flexDirection: "column",
      border: "dotted 1px",
    });
  }, []);

  const logo = useMemo<SerializedStyles>(() => {
    return css({
      padding: `${theme.spacing.large}px ${theme.spacing.wide}px`,
    });
  }, [theme]);

  return { root, logo };
}
