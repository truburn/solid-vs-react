import type { Meta, StoryObj } from "@storybook/react";
import { RecipeList as RecipeListComponent } from "./RecipeList";

const meta: Meta<typeof RecipeListComponent> = {
  component: RecipeListComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RecipeList: Story = {};
