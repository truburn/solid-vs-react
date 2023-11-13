import { css } from "@emotion/react";

export function useIconStyles() {
  const root = css({
    color: "currentcolor",
  });

  return { root };
}
