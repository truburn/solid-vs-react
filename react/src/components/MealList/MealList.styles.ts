import { css, useTheme } from "@emotion/react";
import { MealListProps } from "@/components/MealList";
import { Mixins } from "@/utils";

export function useMealListStyles(props: Partial<MealListProps>) {
  const theme = useTheme();
  const { align = "left", colorKey = "standard" } = props;
  const colorGroup = theme.colors[colorKey];
  const justifyContent = align === "right" ? "flex-end" : "flex-start";

  const root = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent,
    ...Mixins.spacing("margin", { all: 0 }),
    ...Mixins.spacing("padding", { all: 0 }),
    listStyle: "none",
    "& li": {
      display: "flex",
      alignItems: "center",
      ...Mixins.spacing("margin", { all: "0.25rem" }),
      ...Mixins.spacing("padding", { horizontal: "0.25rem" }),
      fontSize: "0.75rem",
      fontWeight: theme.fonts.default.weight?.light,
      background: colorGroup.altContrast,
      color: colorGroup.altMain,
      whiteSpace: "nowrap",
      height: "1rem",
      borderRadius: "0.5rem",
    },
  });

  return { root };
}
