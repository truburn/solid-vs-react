import type { Meta, StoryObj } from "@storybook/react";
import { Select as SelectComponent } from "./Select";

const meta: Meta<typeof SelectComponent> = {
  title: "FormElements/Select",
  component: SelectComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {};
