import { useMemo } from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

export function usePageNotFoundStyles() {
  const theme = useTheme();

  const root = useMemo<SerializedStyles>(() => {
    return css({
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.secondary.main,
      fontSize: "3rem",
      fontFamily: theme.fonts.body.name,
      textAlign: "center",
    });
  }, [theme]);

  const icon = useMemo<SerializedStyles>(() => {
    return css({
      color: theme.colors.primary.main,
      fontSize: "20rem",
      margin: theme.spacing.wide,
    });
  }, [theme]);

  const redirect = useMemo<SerializedStyles>(() => {
    return css({
      fontSize: "1.25rem",
      color: theme.colors.standard.main,
      "& a": {
        display: "block",
        margin: theme.spacing.large,
        fontSize: "1rem",
      },
    });
  }, [theme]);

  return { root, icon, redirect };
}
