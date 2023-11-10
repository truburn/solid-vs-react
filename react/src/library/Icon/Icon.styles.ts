import { useMemo } from "react";
import { css, SerializedStyles } from "@emotion/react";

export function useIconStyles() {
  const root = useMemo<SerializedStyles>(() => {
    return css({
      color: "currentcolor",
    });
  }, []);

  return { root };
}
