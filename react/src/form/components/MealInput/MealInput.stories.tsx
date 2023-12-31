import type { Meta, StoryObj } from "@storybook/react";
import { MealInput as MealInputComponent } from "./MealInput";

const meta: Meta<typeof MealInputComponent> = {
  title: "FormComponents/MealInput",
  component: MealInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MealInput: Story = {};
