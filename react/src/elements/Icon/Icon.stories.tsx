import type { Meta, StoryObj } from "@storybook/react";
import { Icon as IconComponent } from "./Icon";

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {};
