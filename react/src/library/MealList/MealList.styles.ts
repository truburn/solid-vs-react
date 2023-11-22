import { css, useTheme } from "@emotion/react";
import { MealListStyleProps } from "@/library/MealList";
import { useMemo } from "react";
import { ThemeColor } from "@/theme";

export function useMealListStyles(props: MealListStyleProps = {}) {
  const theme = useTheme();
  const { alignRight, colorKey } = props;

  const colorGroup = useMemo<ThemeColor>(() => {
    let tmpGroup: ThemeColor = theme.colors.standard;

    if (colorKey && !["background", "panel"].includes(colorKey)) {
      tmpGroup = theme.colors[colorKey] as ThemeColor;
    }
    return tmpGroup;
  }, [colorKey, theme.colors]);

  const root = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: alignRight ? "flex-end" : "flex-start",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "& li": {
      display: "flex",
      alignItems: "center",
      margin: theme.spacing.thin,
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
