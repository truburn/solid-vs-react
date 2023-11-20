import { css, useTheme } from "@emotion/react";
import { useMemo } from "react";
import { ThemeColor, ThemeColorKey } from "@/theme";
import { colorOpacity } from "@/utils";
import { FormGroupStyleProps } from "@/library/FormGroup";

export function useFormGroupStyles(props: FormGroupStyleProps) {
  const theme = useTheme();
  const { status } = props;

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
    margin: theme.spacing.large,
    borderColor: colorOpacity(colorGroup.main, status === "idle" ? 0.25 : 1),
    borderStyle: "solid",
    ...theme.border.drawn,
  });

  const legend = css({
    color: colorGroup.main,
    fontFamily: theme.fonts.heading.name,
    fontSize: "1.25rem",
  });

  const info = css({
    textAlign: "right",
    marginRight: theme.spacing.medium,
    marginTop: -theme.spacing.large * 1.5,
    fontSize: "0.875rem",
    color: theme.colors.info.main,
  });

  const values = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
    "& > div": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      margin: `0 ${theme.spacing.medium}px`,
      overflow: "hidden",
      "& input, & textarea": {
        borderStyle: "solid",
        borderWidth: theme.border.width,
        borderColor: theme.border.color,
        borderRadius: theme.border.radius,
        background: colorGroup.contrast,
        color: colorGroup.main,
        padding: theme.spacing.medium,
        fontFamily: theme.fonts.body.name,
        fontSize: theme.baseSize,
      },
    },
  });

  const label = css({
    color: colorGroup.main,
    fontSize: "0.875rem",
    fontFamily: theme.fonts.heading.name,
    fontWeight: "bold",
    margin: 0,
    marginBottom: theme.spacing.small,
    padding: `0 ${theme.spacing.small}px`,
  });

  return { root, legend, info, values, label };
}
