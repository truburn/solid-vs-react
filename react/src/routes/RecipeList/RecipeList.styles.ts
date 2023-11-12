import { css, SerializedStyles } from "@emotion/react";

export function useRecipeListStyles() {
  const root: SerializedStyles = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: 0,
    padding: 0,
    listStyle: "none",
  });

  return { root };
}
