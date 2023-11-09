import { useMemo } from "react";
import { css, SerializedStyles } from "@emotion/react";

export function useHeaderBarStyles() {
  const root = useMemo<SerializedStyles>(() => {
    return css({
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "flex-start",
    });
  }, []);

  const searchWrapper = useMemo<SerializedStyles>(() => {
    return css({
      width: 840,
    });
  }, []);

  const userToolsWrapper = useMemo<SerializedStyles>(() => {
    return css({
      width: 350,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    });
  }, []);

  return { root, searchWrapper, userToolsWrapper };
}
