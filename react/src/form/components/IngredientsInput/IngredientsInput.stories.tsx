import type { Meta, StoryObj } from "@storybook/react";
import { IngredientsInput as IngredientsInputComponent } from "./IngredientsInput";

const meta: Meta<typeof IngredientsInputComponent> = {
  component: IngredientsInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IngredientsInput: Story = {};
