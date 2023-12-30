import { css, useTheme } from "@emotion/react";
import { Mixins } from "@/utils";

export function useRecipeCardStyles(
  colorKey: MCStyleKeys["colorKey"] = "standard",
) {
  const theme = useTheme();
  const colorGroup = theme.colors[colorKey];

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: colorGroup.main,
    transition: "ease all 0.25s",
    "&:hover": {
      color: colorGroup.main,
      outlineOffset: theme.spacing.small,
      outlineWidth: 2,
      outlineColor: colorGroup.main,
      outlineStyle: "solid",
    },
  });

  const heading = css({
    ...Mixins.spacing("margin", 0),
    ...Mixins.spacing("padding", {
      vertical: theme.spacing.small,
      horizontal: theme.spacing.medium,
    }),
    width: 225,
    background: colorGroup.main,
    color: colorGroup.contrast,
    borderStyle: "solid",
    borderColor: colorGroup.main,
    ...Mixins.borderWidths({
      all: theme.border.width,
      bottom: "0px",
    }),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontFamily: theme.fonts.body.name,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 1,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflowX: "hidden",
  });

  const info = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    background: colorGroup.main,
    color: colorGroup.contrast,
    borderStyle: "solid",
    borderColor: colorGroup.main,
    ...Mixins.borderWidths({
      all: theme.border.width,
      bottom: "0px",
    }),
    borderTopRightRadius: 4,
  });

  const cuisine = css({
    fontSize: "0.75rem",
    fontWeight: theme.fonts.default.weight?.light,
    ...Mixins.spacing("padding", {
      all: theme.spacing.small,
      left: theme.spacing.wide,
    }),
  });

  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderStyle: "solid",
    borderColor: colorGroup.main,
    borderRadius: "0 0 4px 4px",
    ...Mixins.borderWidths({
      all: theme.border.width,
    }),
    overflow: "hidden",
    background: colorGroup.contrast,
  });

  const meta = css({
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "space-between",
    fontSize: 12,
    lineHeight: 1,
    fontFamily: theme.fonts.default.name,
    fontWeight: theme.fonts.default.weight?.light,
    ...Mixins.spacing("padding", {
      bottom: theme.spacing.thin,
      horizontal: theme.spacing.small,
      top: theme.spacing.medium,
    }),
    opacity: 0.75,
    "& p": {
      ...Mixins.spacing("margin", 0),
      ...Mixins.spacing("padding", 0),
      lineHeight: 1,
      fontSize: "inherit",
      fontFamily: "inherit",
      fontWeight: "inherit",
    },
  });

  const summary = css({
    flex: 1,
    ...Mixins.spacing("margin", 0),
    ...Mixins.spacing("padding", {
      top: theme.spacing.medium,
      horizontal: theme.spacing.large,
      bottom: theme.spacing.large,
    }),
  });

  return { root, heading, info, cuisine, content, meta, summary };
}
