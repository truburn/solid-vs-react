import { css, SerializedStyles } from "@emotion/react";

export function useSideListStyles() {
  const root = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    margin: 0,
    padding: 0,
    listStyle: "none",
    width: 225,
  });

  return { root };
}
