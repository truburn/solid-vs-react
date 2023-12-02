import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "../src/theme";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import { Title, Description, Subtitle } from "@storybook/blocks";
import React from "react";
import { ImportStatement, PropsTable } from "./blocks";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
      exclude: ["onClick", "className"],
    },
    options: {
      storySort: {
        order: ["elements", "components", "FormElements", "FormComponents"],
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <ImportStatement />
          <h2>Description</h2>
          <Description />
          <PropsTable />
        </>
      ),
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
  argTypes: {
    id: {
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Generated string" }
      }
    },
  },
};

export default preview;
