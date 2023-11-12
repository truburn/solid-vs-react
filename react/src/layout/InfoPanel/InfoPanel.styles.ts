import { css, SerializedStyles } from "@emotion/react";

export function useInfoPanelStyles() {
  const root = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  });

  return { root };
}
