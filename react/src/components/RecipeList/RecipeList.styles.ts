import { RecipeListProps } from "@/components/RecipeList";
import { Mixins } from "@/utils";
import { css, useTheme } from "@emotion/react";

export function useRecipeListStyles(props: Partial<RecipeListProps>) {
  const theme = useTheme();
  const { asTiles } = props;

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    overflow: "hidden",
  });

  const list = css({
    ...Mixins.spacing("margin", { all: 0, right: 16 }),
    ...Mixins.spacing("padding", { all: 0 }),
    listStyle: "none",
    display: "flex",
    flexDirection: asTiles ? "row" : "column",
    flexWrap: asTiles ? "wrap" : "nowrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
    "& > li": {
      ...Mixins.spacing("margin", { all: 0 }),
      ...Mixins.spacing("padding", {
        all: theme.spacing.medium,
      }),
      display: "flex",
      width: asTiles ? 206 : "auto",
      boxSizing: "border-box",
      "& > div": {
        flex: 1,
      },
    },
  });

  return { root, list };
}
