import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader as PageHeaderComponent } from "./PageHeader";
import { colorKey, fontKey } from "@/storybook/argTypes";

const meta: Meta<typeof PageHeaderComponent> = {
  component: PageHeaderComponent,
  parameters: {
    controls: {
      exclude: ["id", "className", "children"]
    }
  },
  argTypes: {
    fontKey: {
      ...fontKey,
      defaultValue: "heading",
      table: {
        defaultValue: { summary: "heading"}
      }
    },
    colorKey: {
      ...colorKey,
      defaultValue: "secondary",
      table: {
        defaultValue: { summary: "secondary" }
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PageHeader: Story = {
  args: {
    title: "Page Header Text"
  }
};
