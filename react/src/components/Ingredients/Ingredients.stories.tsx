import type { Meta, StoryObj } from "@storybook/react";
import { Ingredients as IngredientsComponent } from "./Ingredients";

const meta: Meta<typeof IngredientsComponent> = {
  component: IngredientsComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Ingredients: Story = {};
