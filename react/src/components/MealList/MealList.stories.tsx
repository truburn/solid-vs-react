import type { Meta, StoryObj } from "@storybook/react";
import { MealList as MealListComponent } from "./MealList";

const meta: Meta<typeof MealListComponent> = {
  component: MealListComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MealList: Story = {};
