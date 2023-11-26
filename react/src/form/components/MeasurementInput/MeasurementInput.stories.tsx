import type { Meta, StoryObj } from "@storybook/react";
import { MeasurementInput as MeasurementInputComponent } from "./MeasurementInput";

const meta: Meta<typeof MeasurementInputComponent> = {
  component: MeasurementInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MeasurementInput: Story = {};
