import { css, useTheme, CSSObject } from "@emotion/react";
import { ButtonProps, ButtonStyle, ButtonVariant } from "@/elements/Button";
import { ThemeColor } from "@/theme";
import { useMemo } from "react";
import { Mixins } from "@/utils";

export function useButtonStyles(props: Partial<ButtonProps> = {}) {
  const theme = useTheme();
  const {
    colorKey = "standard",
    variant = ButtonVariant.STANDARD,
    buttonStyle = ButtonStyle.OUTLINE,
    iconPosition,
    iconButton,
    icon: iconEl,
    fontKey = "body",
  } = props;
  const colorGroup: ThemeColor = theme.colors[colorKey];

  const buttonColors = useMemo<CSSObject>(() => {
    const tmpData: CSSObject = {
      background: "transparent",
      color: colorGroup.main,
      borderColor: "transparent",
      "&:enabled:hover": {
        color: colorGroup.altMain,
        background: colorGroup.altContrast,
        borderColor: "transparent",
      },
    };

    if (buttonStyle === ButtonStyle.OUTLINE) {
      tmpData.background = colorGroup.altContrast;
      tmpData.color = colorGroup.altMain;
      tmpData.borderColor = "currentcolor";
      tmpData["&:enabled:hover"] = {
        color: colorGroup.main,
        background: colorGroup.contrast,
        borderColor: "currentcolor",
      };
    }

    if (buttonStyle === ButtonStyle.FILLED) {
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
  }, [buttonStyle]);

  const buttonBorders = useMemo<CSSObject>(() => {
    const tmpData: CSSObject = {
      borderStyle: "solid",
      ...Mixins.borderWidths(0),
      borderRadius: 0,
    };

    switch (variant) {
      case ButtonVariant.STANDARD:
        tmpData.borderWidth = 3;
        Object.entries(theme.border.drawn).forEach(([key, value]) => {
          tmpData[key] = value;
        });
        break;

      case ButtonVariant.SQUARE:
        tmpData.borderWidth = theme.border.width;
        tmpData.borderRadius = theme.border.radius;
        break;

      case ButtonVariant.ROUND:
        tmpData.borderWidth = theme.border.width;
        tmpData.borderRadius = "1.5em";
        break;

      case ButtonVariant.TEXT:
        tmpData.background = "transparent";
        break;
    }

    return tmpData;
  }, [variant]);

  const iconPadding = useMemo<CSSObject>(() => {
    const thinSpacing = "0.125em";
    const medSpacing = "0.5em";

    const tmpData: CSSObject = Mixins.borderWidths({
      vertical: 0,
      horizontal: thinSpacing,
    });

    if (iconButton) {
      tmpData.paddingTop = thinSpacing;
      tmpData.paddingBottom = thinSpacing;
    } else if (iconPosition === "right") {
      tmpData.paddingLeft = medSpacing;
    } else if (iconEl) {
      tmpData.paddingRight = medSpacing;
    }

    return tmpData;
  }, [iconPosition, iconButton, iconEl]);

  const root =
    variant === ButtonVariant.CUSTOM
      ? css({
          ...buttonColors,
          fontFamily: theme.fonts[fontKey].name,
          "&:disabled": {
            opacity: 0.25,
            cursor: "not-allowed",
          },
        })
      : css({
          ...(iconButton && {
            width: "2.5em",
            height: "2.5em",
            overflow: "hidden",
          }),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: theme.fonts[fontKey].name,
          fontSize: "1rem",
          lineHeight: 1,
          outline: "none",
          ...Mixins.spacing("margin", { all: 0 }),
          ...Mixins.spacing("padding", {
            vertical: "0.25rem",
            horizontal: "0.5rem ",
          }),
          cursor: "pointer",
          transition: "ease all 0.5s",
          ...buttonColors,
          ...buttonBorders,
          "&:disabled": {
            opacity: 0.25,
            cursor: "not-allowed",
          },
        });

  const label = css({
    ...Mixins.spacing("padding", theme.spacing.thin),
  });

  const icon = css({
    fontSize: "1.5em",
    ...iconPadding,
  });

  return { root, label, icon };
}
