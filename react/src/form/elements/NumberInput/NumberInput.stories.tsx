import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput as NumberInputComponent } from "./NumberInput";

const meta: Meta<typeof NumberInputComponent> = {
  component: NumberInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {};
