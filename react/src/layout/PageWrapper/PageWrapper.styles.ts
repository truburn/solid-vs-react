import { useMemo } from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

export function usePageStyles() {
  const theme = useTheme();

  const root = useMemo<SerializedStyles>(() => {
    return css({
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "center",
      overflow: "hidden",
    });
  }, []);

  const content = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between",
      overflow: "hidden",
    });
  }, []);

  const page = useMemo<SerializedStyles>(() => {
    return css({
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between",
      overflow: "hidden",
    });
  }, []);

  const outlet = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      alignItems: "stretch",
      justifyContent: "flex-start",
      overflow: "hidden",
      width: 840,
      margin: `${theme.spacing.large}px 0px`,
      borderStyle: "solid",
      borderWidth: theme.border.width,
      borderRadius: theme.border.radius,
      borderColor: theme.colors.panel.border,
      background: theme.colors.panel.background,
    });
  }, [theme]);

  const sidePanel = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "flex-start",
      width: 350,
      margin: `${theme.spacing.large}px 0px`,
    });
  }, [theme]);

  return { root, content, page, outlet, sidePanel };
}
