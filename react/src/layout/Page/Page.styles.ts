import { css } from "@emotion/react";

export function usePageStyles() {
  const root = css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  });

  return { root };
}
