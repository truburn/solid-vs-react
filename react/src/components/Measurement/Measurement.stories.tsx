import type { Meta, StoryObj } from "@storybook/react";
import { Measurement as MeasurementComponent } from "./Measurement";

const meta: Meta<typeof MeasurementComponent> = {
  component: MeasurementComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Measurement: Story = {};
