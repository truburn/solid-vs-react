import { useMemo } from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

export function useErrorPageStyles() {
  const theme = useTheme();

  const stackLine = useMemo<SerializedStyles>(() => {
    return css({
      fontSize: "0.875rem",
      fontFamily: theme.fonts.default.name,
      fontWeight: theme.fonts.default.weight?.light,
      marginTop: theme.spacing.large,
      marginBottom: theme.spacing.large,
      marginLeft: theme.spacing.wide * 2,
      marginRight: theme.spacing.wide,
      "&:first-of-type": {
        marginLeft: theme.spacing.wide,
        fontSize: "1rem",
        fontWeight: theme.fonts.default.weight?.bold,
        color: theme.colors.primary.main,
      },
    });
  }, [theme]);

  return { stackLine };
}
