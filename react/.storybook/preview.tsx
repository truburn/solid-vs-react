import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "../src/theme";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import { Title, Description, Subtitle } from "@storybook/blocks";
import React from "react";
import { ImportStatement, PropsTable } from "./blocks";
import { faRocketLaunch } from "@fortawesome/pro-duotone-svg-icons";
import { faPaw } from "@fortawesome/pro-solid-svg-icons";
import { faPotFood } from "@fortawesome/pro-regular-svg-icons";
import { faGingerbreadMan } from "@fortawesome/pro-thin-svg-icons";

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
    colorKey: {
      defaultValue: "standard",
      options: [
        "standard",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
      ],
      table: {
        defaultValue: { summary: `"standard"` },
      }
    },
    fontKey: {
      control: {
        type: "select",
        value: "default"
      },
      options: ["default", "body", "heading"],
      table: {
        defaultValue: { summary: `"default"`}
      }
    },
    onClick: {
      type: "function",
    },
    icon: {
      control: {
        type: "select",
        value: "Rocket",
      },
      options: [
        "Rocket",
        "Paw",
        "Food",
        "Cookie",
      ],
      mapping: {
        Rocket: faRocketLaunch,
        Paw: faPaw,
        Food: faPotFood,
        Cookie: faGingerbreadMan,
      },
    },
    id: {
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Generated string" }
      }
    },
  },
};

export default preview;
