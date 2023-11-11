import { css, SerializedStyles } from "@emotion/react";

export function useIconStyles() {
  const root: SerializedStyles = css({
    color: "currentcolor",
  });

  return { root };
}
