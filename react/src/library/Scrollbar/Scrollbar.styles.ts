import { useMemo } from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useScrollbarStyles() {
  const theme = useTheme();

  const root = useMemo<SerializedStyles>(() => {
    return css({
      flex: 1,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between",
    });
  }, []);

  const contentWrapper = useMemo<SerializedStyles>(() => {
    return css({
      flex: 1,
      overflow: "hidden",
      position: "relative",
    });
  }, []);

  const content = useMemo<SerializedStyles>(() => {
    return css({
      overflow: "auto",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: -18,
    });
  }, []);

  const track = useMemo<SerializedStyles>(() => {
    return css({
      border: "solid 1px",
      margin: 5,
      marginLeft: 0,
      ...theme.scrollbar,
      background: theme.colors.standard.contrast,
      borderColor: theme.colors.standard.altContrast,
      overflow: "hidden",
      position: "relative",
    });
  }, [theme]);

  const thumb = useMemo<SerializedStyles>(() => {
    return css({
      ...theme.scrollbar,
      background: theme.colors.standard.altContrast,
      cursor: "pointer",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    });
  }, [theme]);

  return { root, contentWrapper, content, track, thumb };
}
