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
  });

  const list = css({
    marginTop: theme.spacing.small,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& li": {
      margin: `${theme.spacing.thin}px ${theme.spacing.small}px`,
      padding: `${theme.spacing.thin}px 0.5rem`,
      background: theme.colors.standard.main,
      color: theme.colors.standard.contrast,
      borderRadius: "0.75rem",
      fontSize: "0.75rem",
      lineHeight: 1,
      fontWeight: theme.fonts.default.weight?.light,
      ...(!readonly && {
        ".changed &": {
          background: theme.colors.secondary.main,
          color: theme.colors.secondary.contrast,
        },
        ".error &": {
          background: theme.colors.error.main,
          color: theme.colors.error.contrast,
        },
      }),
    },
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

  return { root, list, inputs, checkbox };
}
