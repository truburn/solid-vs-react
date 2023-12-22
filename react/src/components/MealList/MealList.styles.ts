import { css, useTheme } from "@emotion/react";
import { MealListProps } from "@/components/MealList";

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
    margin: 0,
    padding: 0,
    listStyle: "none",
    "& li": {
      display: "flex",
      alignItems: "center",
      margin: "0.25rem",
      padding: "0 0.5rem",
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
