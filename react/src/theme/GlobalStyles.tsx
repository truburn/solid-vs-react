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
          "#cookbook": {
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
        }),
      ]}
    />
  );
}
