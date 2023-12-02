import { css, useTheme } from "@emotion/react";
import { PageHeaderProps } from "@/elements/PageHeader";

export function usePageHeaderStyles(props: Partial<PageHeaderProps>) {
  const { colorKey = "secondary", fontKey = "heading" } = props;
  const theme = useTheme();
  const colorGroup = theme.colors[colorKey];

  const root = css({
    width: "fit-content",
    maxWidth: "65%",
    margin: "1rem auto",
    padding: "0.75rem 2.25rem",
    fontFamily: theme.fonts[fontKey].name,
    fontSize: "1.5rem",
    background: colorGroup.altContrast,
    color: colorGroup.altMain,
    lineHeight: 1,
    transform: "rotate(-2deg)",
    borderStyle: "solid",
    borderWidth: 3,
    textAlign: "center",
    ...theme.border.drawn,
  });

  return { root };
}
