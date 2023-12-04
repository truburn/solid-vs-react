import type { Meta, StoryObj } from "@storybook/react";
import { ServingSize as ServingSizeComponent } from "@/components/ServingSize";

const meta: Meta<typeof ServingSizeComponent> = {
  component: ServingSizeComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ServingSize: Story = {};
