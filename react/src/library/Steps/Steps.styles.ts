import { theme } from "@/theme";
import { css } from "@emotion/react";

export function useStepsStyles(noTitle?: boolean) {
  const root = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  });

  const content = css({
    flex: 1,
    overflow: "hidden",
    display: "flex",
  });

  const list = css({
    margin: noTitle ? 0 : theme.spacing.medium,
    paddingLeft: theme.spacing.large,
    counterReset: "stepCounter",
    listStyle: "none",
    "& li": {
      counterIncrement: "stepCounter",
      margin: 0,
      padding: `${theme.spacing.large}px ${theme.spacing.medium}px`,
      fontFamily: theme.fonts.body.name,
      borderStyle: "solid",
      borderColor: theme.colors.primary.altContrast,
      borderWidth: 0,
      borderBottomWidth: theme.border.width,
      "&:before": {
        content: "counter(stepCounter)",
        fontWeight: "bold",
        marginLeft: "-2rem",
        marginRight: "0.25rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.125rem",
        width: "1.75rem",
        height: "1.75rem",
        borderRadius: "1rem",
        background: theme.colors.primary.main,
        color: theme.colors.primary.contrast,
      },
      "&:last-of-type": {
        borderWidth: 0,
      },
    },
  });

  return { root, content, list };
}
