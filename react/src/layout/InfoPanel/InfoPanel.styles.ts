import { css, SerializedStyles } from "@emotion/react";

export function useInfoPanelStyles() {
  const root: SerializedStyles = css({
    border: "dotted 1px",
  });

  return { root };
}
