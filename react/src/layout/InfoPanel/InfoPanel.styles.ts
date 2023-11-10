import { useMemo } from "react";
import { css, SerializedStyles } from "@emotion/react";

export function useInfoPanelStyles() {
  const root = useMemo<SerializedStyles>(() => {
    return css({
      border: "dotted 1px",
    });
  }, []);

  return { root };
}
