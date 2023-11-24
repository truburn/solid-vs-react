import { css, useTheme } from "@emotion/react";

export function useMealInputStyles(readonly?: boolean) {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    ...(readonly && {
      borderStyle: "solid",
      borderColor: theme.border.color,
      borderWidth: 0,
      borderRightWidth: theme.border.width,
    }),
    "& > div": {
      margin: `${theme.spacing.small}px 0`,
      padding: 0,
    },
    "& ul": {
      marginTop: theme.spacing.medium,
      marginBottom: theme.spacing.large,
    },
    ...(!readonly && {
      ".changed & li": {
        background: theme.colors.secondary.main,
        color: theme.colors.secondary.contrast,
      },
      ".error & li": {
        background: theme.colors.error.main,
        color: theme.colors.error.contrast,
      },
    }),
  });

  const inputs = css({
    display: "flex",
    flexWrap: "wrap",
  });

  const checkbox = css({
    width: "12ch",
    fontFamily: theme.fonts.body.name,
    fontSize: "1rem",
    color: theme.colors.standard.main,
    ...(!readonly && {
      ".changed &": {
        color: theme.colors.secondary.main,
      },
      ".error &": {
        color: theme.colors.error.main,
      },
    }),
  });

  return { root, inputs, checkbox };
}
