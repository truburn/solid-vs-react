import { css, SerializedStyles } from "@emotion/react";

export function useRecipeListStyles() {
  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: 0,
    padding: 0,
    listStyle: "none",
  });

  return { root };
}
