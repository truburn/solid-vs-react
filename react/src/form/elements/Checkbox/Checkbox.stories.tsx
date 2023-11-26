import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "./Checkbox";

const meta: Meta<typeof CheckboxComponent> = {
  title: "FormElements/Checkbox",
  component: CheckboxComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {};
