import { css, SerializedStyles } from "@emotion/react";

export function useRecipeListStyles() {
  const root: SerializedStyles = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  });

  return { root };
}
