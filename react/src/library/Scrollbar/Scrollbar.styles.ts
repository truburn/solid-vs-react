import { useMemo } from "react";
import { css, SerializedStyles } from "@emotion/react";

export function useScrollbarStyles() {
  const root = useMemo<SerializedStyles>(() => {
    return css({
      border: "dotted 1px",
      flex: 1,
    });
  }, []);

  return { root };
}
