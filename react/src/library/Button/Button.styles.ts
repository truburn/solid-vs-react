import { css, useTheme } from "@emotion/react";
import { ButtonProps } from "@/library/Button";

export function useButtonStyles(color: ButtonProps["color"] = "standard") {
  const theme = useTheme();

  const root = css({
    fontFamily: theme.fonts.body.name,
    fontSize: "1.25rem",
    lineHeight: 1,
    ...theme.border.drawn,
    background: theme.colors[color].altContrast,
    color: theme.colors[color].altMain,
    borderColor: theme.colors[color].altMain,
    cursor: "pointer",
    transition: "ease all 0.5s",
    outline: "none",
    borderStyle: "solid",
    padding: `${theme.spacing.thin}px ${theme.spacing.large}px`,
    opacity: 0.5,
    "&:hover": {
      color: theme.colors[color].main,
      background: theme.colors[color].contrast,
      borderColor: theme.colors[color].main,
      opacity: 1,
    },
  });

  return { root };
}
