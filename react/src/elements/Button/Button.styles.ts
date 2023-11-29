import { css, useTheme } from "@emotion/react";
import { ButtonProps, ButtonStyle, ButtonVariant } from "@/elements/Button";
import { ThemeColor } from "@/theme";
import { useMemo } from "react";

export function useButtonStyles(props: Partial<ButtonProps> = {}) {
  const theme = useTheme();
  const {
    colorKey = "standard",
    variant = ButtonVariant.STANDARD,
    buttonStyle = ButtonStyle.OUTLINE,
  } = props;
  const colorGroup: ThemeColor = theme.colors[colorKey];

  const borderFill = useMemo(() => {
    const tmpData = {
      background: "transparent",
      color: colorGroup.main,
      borderColor: "transparent",
      "&:enabled:hover": {
        color: colorGroup.altMain,
        background: colorGroup.altContrast,
        borderColor: "transparent",
      },
    };

    if (buttonStyle?.includes("outline")) {
      tmpData.background = colorGroup.altContrast;
      tmpData.color = colorGroup.altMain;
      tmpData.borderColor = "currentcolor";
      tmpData["&:enabled:hover"] = {
        color: colorGroup.main,
        background: colorGroup.contrast,
        borderColor: "currentcolor",
      };
    }

    if (buttonStyle?.includes("filled")) {
      tmpData.background = colorGroup.main;
      tmpData.color = colorGroup.contrast;
      tmpData.borderColor = colorGroup.main;
      tmpData["&:enabled:hover"] = {
        background: colorGroup.altContrast,
        color: colorGroup.altMain,
        borderColor: colorGroup.main,
      };
    }

    return tmpData;
  }, [variant]);

  const root =
    variant === ButtonVariant.CUSTOM
      ? css({})
      : css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: theme.fonts.body.name,
          fontSize: "1rem",
          lineHeight: 1,
          borderStyle: "solid",
          borderWidth: 3,
          ...theme.border.drawn,
          outline: "none",
          margin: 0,
          padding: `${theme.spacing.small}px ${theme.spacing.medium}px`,
          cursor: "pointer",
          transition: "ease all 0.5s",
          ...borderFill,
          "&:disabled": {
            opacity: 0.25,
            cursor: "not-allowed",
          },
        });

  const label = css({
    padding: theme.spacing.thin,
  });

  const icon = css({
    padding: `0 ${theme.spacing.thin}px`,
    fontSize: "1.5em",
  });

  return { root, label, icon };
}
