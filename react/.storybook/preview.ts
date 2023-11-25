import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "../src/theme";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme,
      },
      defaultTheme: "theme",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
    withTests({ results }),
  ],
};

export default preview;
