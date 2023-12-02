import { css, useTheme } from "@emotion/react";
import { ScrollbarProps } from "@/elements/Scrollbar";

export function useScrollbarStyles(props: Partial<ScrollbarProps>) {
  const { showBorder, colorKey = "standard" } = props;
  const theme = useTheme();

  const colorGroup = theme.colors[colorKey];

  const root = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    ...(showBorder && {
      borderStyle: "solid",
      borderWidth: theme.border.width,
      borderRadius: theme.border.radius,
      borderColor: colorGroup.altContrast,
    }),
  });

  const contentWrapper = css({
    flex: 1,
    display: "flex",
    overflow: "hidden",
    position: "relative",
    width: "fit-content",
  });

  const content = css({
    flex: 1,
    overflow: "auto",
    marginRight: -18,
  });

  const track = css({
    ...theme.scrollbar,
    border: "solid 1px",
    margin: 5,
    marginLeft: 0,
    background: colorGroup.contrast,
    borderColor: colorGroup.altContrast,
    overflow: "hidden",
    position: "relative",
  });

  const thumb = css({
    ...theme.scrollbar,
    background: colorGroup.altContrast,
    cursor: "pointer",
    height: "100%",
    minHeight: 20,
    position: "absolute",
    top: 0,
    left: 0,
  });

  return { root, contentWrapper, content, track, thumb };
}
