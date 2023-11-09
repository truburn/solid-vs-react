import { useMemo } from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useNavigationStyles() {
  const theme = useTheme();

  const root = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      flexDirection: "column",
      width: 250,
    });
  }, []);

  const logo = useMemo<SerializedStyles>(() => {
    return css({
      padding: `${theme.spacing.large}px ${theme.spacing.wide}px`,
    });
  }, [theme]);

  return { root, logo };
}
