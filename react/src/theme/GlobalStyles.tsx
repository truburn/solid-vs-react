import { Mixins } from "@/utils";
import { Global, css } from "@emotion/react";

export function GlobalStyles() {
  return (
    <Global
      styles={[
        css`
          @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&family=Happy+Monkey&family=Rock+Salt&display=swap");
        `,
        (theme) => ({
          html: {
            ...Mixins.spacing("margin", 0),
            ...Mixins.spacing("padding", 0),
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          },
          body: {
            ...Mixins.spacing("margin", 0),
            ...Mixins.spacing("padding", 0),
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            background: theme.colors.background,
            color: theme.colors.standard.main,
            fontSize: theme.baseSize,
            fontFamily: theme.fonts.default.name,
          },
          "#root": {
            ...Mixins.spacing("margin", 0),
            ...Mixins.spacing("padding", 0),
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
          },
          "#storybook-docs": {
            overflow: "auto",
            height: "100%",
            p: {
              fontFamily: "unset",
            },
          },
          "#storybook-root": {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          },
          p: {
            fontFamily: theme.fonts.body.name,
            ...Mixins.spacing("margin", { bottom: theme.spacing.large }),
          },
          a: {
            fontFamily: "inherit",
            fontWeight: theme.fonts.default.weight?.bold,
            color: theme.colors.secondary.altMain,
            "&:hover": {
              color: theme.colors.secondary.main,
            },
          },
          "input, textarea": {
            borderStyle: "solid",
            ...Mixins.borderWidths(theme.border.width),
            borderColor: theme.border.color,
            borderRadius: theme.border.radius,
            ...Mixins.spacing("padding", theme.spacing.medium),
            fontFamily: theme.fonts.body.name,
            fontSize: theme.baseSize,
            background: theme.colors.standard.contrast,
            color: theme.colors.standard.main,
            outlineColor: theme.colors.standard.main,
          },
          [`label:has(input[type="checkbox"])`]: {
            display: "grid",
            gridTemplateColumns: "1.125em auto",
            gap: "0.5em",
            cursor: "pointer",
            ...Mixins.spacing("margin", {
              vertical: theme.spacing.small,
              right: theme.spacing.small,
            }),
            color: theme.colors.standard.main,
            "&:hover": {
              fontWeight: "bold",
            },
            "&:has(input:disabled)": {
              opacity: 0.5,
              cursor: "not-allowed",
              "&:hover": {
                fontWeight: "normal",
              },
            },
            "& > input": {
              display: "grid",
              placeContent: "flex-end center",
              appearance: "none",
              ...Mixins.spacing("margin", "0.125em"),
              ...Mixins.spacing("padding", 0),
              background: theme.colors.standard.contrast,
              color: "currentcolor",
              borderStyle: "solid",
              borderColor: "currentcolor",
              ...Mixins.borderWidths(theme.border.width),
              borderRadius: theme.border.radius,
              width: "1.15em",
              height: "1.15em",
              transform: "translateY(-0.075em)",
              cursor: "inherit",
              "&::before": {
                content: '""',
                width: "1.65em",
                height: "1.35em",
                transform: "scale(0)",
                transition: "120ms transform ease-in-out",
                boxShadow: "inset 1em 1em currentcolor",
                transformOrigin: "center",
                clipPath:
                  "polygon(14% 35%, 0 55%, 50% 100%, 100% 0%, 90% 0%, 43% 62%)",
              },
              "&:checked": {
                "&::before": {
                  transform: "scale(1) rotate(2deg)",
                },
              },
            },
          },
        }),
      ]}
    />
  );
}
