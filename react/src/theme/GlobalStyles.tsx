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
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          },
          body: {
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            background: theme.colors.background,
            color: theme.colors.standard.main,
            fontSize: theme.baseSize,
            fontFamily: theme.fonts.default.name,
          },
          "#root": {
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
          },
          p: {
            fontFamily: theme.fonts.body.name,
            margin: 0,
            marginBottom: theme.spacing.large,
          },
          a: {
            fontFamily: "inherit",
            fontWeight: theme.fonts.default.weight?.bold,
            color: theme.colors.secondary.altMain,
            "&:hover": {
              color: theme.colors.secondary.main,
            },
          },
          [`label:has(input[type="checkbox"])`]: {
            display: "grid",
            gridTemplateColumns: "1.125em auto",
            gap: "0.25em",
            cursor: "pointer",
            margin: `${theme.spacing.small}px 0`,
            marginRight: theme.spacing.small,
            color: theme.colors.standard.main,
            "&:has(input:disabled)": {
              opacity: 0.5,
            },
            "& > input": {
              display: "grid",
              placeContent: "flex-end center",
              appearance: "none",
              margin: "0.125em",
              background: theme.colors.standard.contrast,
              color: "currentcolor",
              borderStyle: "solid",
              borderColor: "currentcolor",
              borderWidth: theme.border.width,
              borderRadius: theme.border.radius,
              width: "1.15em",
              height: "1.15em",
              transform: "translateY(-0.075em)",
              cursor: "inherit",
              "&::before": {
                content: '""',
                width: "1.5em",
                height: "1.325em",
                transform: "scale(0)",
                transition: "120ms transform ease-in-out",
                boxShadow: "inset 1em 1em currentcolor",
                transformOrigin: "center",
                clipPath:
                  "polygon(14% 35%, 0 55%, 50% 100%, 100% 0%, 80% 0%, 43% 62%)",
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
