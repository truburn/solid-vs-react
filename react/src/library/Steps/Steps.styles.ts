import { css } from "@emotion/react";

export function useStepsStyles() {
  const root = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  });

  const content = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
  });

  return { root, content };
}
