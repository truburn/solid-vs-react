import { css, useTheme } from "@emotion/react";

export function useScrollbarStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
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
    border: "solid 1px",
    margin: 5,
    marginLeft: 0,
    ...theme.scrollbar,
    background: theme.colors.standard.contrast,
    borderColor: theme.colors.standard.altContrast,
    overflow: "hidden",
    position: "relative",
  });

  const thumb = css({
    ...theme.scrollbar,
    background: theme.colors.standard.altContrast,
    cursor: "pointer",
    height: "100%",
    minHeight: 20,
    position: "absolute",
    top: 0,
    left: 0,
  });

  return { root, contentWrapper, content, track, thumb };
}
