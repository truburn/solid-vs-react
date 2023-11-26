import type { Meta, StoryObj } from "@storybook/react";
import { ToolButtons as ToolButtonsComponent } from "./ToolButtons";

const meta: Meta<typeof ToolButtonsComponent> = {
  component: ToolButtonsComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ToolButtons: Story = {};
