import { css, useTheme } from "@emotion/react";
import { useMemo } from "react";
import { ThemeColor, ThemeColorKey } from "@/theme";
import { colorOpacity } from "@/utils";

export function useFormGroupStyles(status?: string) {
  const theme = useTheme();

  const colorGroup = useMemo<ThemeColor>(() => {
    let colorKey: ThemeColorKey = "standard";

    switch (status) {
      case "idle":
        colorKey = "standard";
        break;

      case "error":
        colorKey = "error";
        break;

      case "changed":
        colorKey = "secondary";
        break;
    }

    return theme.colors[colorKey];
  }, [status, theme]);

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    margin: theme.spacing.large,
    background: colorGroup.contrast,
    borderColor: colorOpacity(colorGroup.main, status === "idle" ? 0.25 : 1),
    borderStyle: "solid",
    ...theme.border.drawn,
    "& > div": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      margin: theme.spacing.medium,
    },
  });

  const legend = css({
    color: colorGroup.main,
    fontFamily: theme.fonts.heading.name,
    fontSize: "1.25rem",
  });

  const label = css({
    color: colorGroup.altMain,
    fontSize: "0.875rem",
    fontFamily: theme.fonts.body.name,
  });

  const input = css({
    fontFamily: theme.fonts.default.name,
    fontSize: "1rem",
    color: theme.colors.standard.main,
    padding: theme.spacing.small,
  });

  return { root, legend, label, input };
}
